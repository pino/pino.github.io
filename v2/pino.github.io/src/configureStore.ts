import { StoreState, Project, Tag, Link } from './types';
import { default as tagsReducer } from './ducks/tags';
import { createStore } from 'redux';
import { Store } from 'react-redux';

const configureStore = (): Store<StoreState> =>
createStore<StoreState>(tagsReducer, readInitialStateFromJson());

export default configureStore;

function readInitialStateFromJson() {
    const projectsData = require('./projects.json');
    const projects: Project[] = [];
    let lastId: number = 0;
    let tags: Tag[] = [];
    for (let projectData of projectsData) {
        let projectLinks: Link[] = [];
        for (let linkData of projectData.links) {
            projectLinks.push({
                id: lastId++,
                title: linkData.title,
                url: linkData.url
            });
        }
        let projectTags: Tag[] = [];
        for (let tagData of projectData.tags) {
            let existingTag: Tag | undefined = tags.find(tag => tag.name === tagData);
            if (!isTag(existingTag)) {
                let newTag: Tag = {
                    id: lastId++,
                    name: tagData,
                    isSelected: false
                };
                projectTags.push(newTag);
                tags.push(newTag);
            } else {
                projectTags.push(existingTag);
            }
        }
        projects.push({
            id: projectData.id,
            title: projectData.title,
            description: projectData.description,
            images: projectData.images,
            links: projectLinks,
            tags: projectTags
        });
    }
    const initialState: StoreState = {
        projects: projects,
        tags: tags,
        allTagsSelected: false,
        filteredProjects: projects
    };
    return initialState;
}

function isTag(x: Tag | undefined): x is Tag {
    return (<Tag> x) !== undefined;
}