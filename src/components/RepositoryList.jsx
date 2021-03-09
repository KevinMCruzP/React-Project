import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {

    const repository = {
        name: 'unform',
        description: 'Forms in React',
        link: "https://github.com/unform/unform",
    };
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />

            </ul>
        </section>
    )
}