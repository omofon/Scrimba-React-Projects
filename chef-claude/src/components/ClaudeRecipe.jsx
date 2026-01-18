import ReactMarkdown from "react-markdown"

export default function claudeRecipe(props) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}