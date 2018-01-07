import * as React from 'react';
import { Project } from '../../types';
import ProjectCard from '../project-card/ProjectCard';
import './ProjectList.css';

export interface ProjectListProps {
    projects: Project[];
    projectClick: () => void;
}

const ProjectList: React.SFC<ProjectListProps> = (props) => (
    <div className="project-list">
        <h1>Projects</h1>
        {props.projects.map(project =>
            <ProjectCard
                key={project.id}
                project={project}
                projectClick={props.projectClick}
            />
        )}
    </div>
);

export default ProjectList;