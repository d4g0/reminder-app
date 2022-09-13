export function Heading({text = "XXL Heading yoo", id = null}) {
    return (
        <h1 id={id} className="text-2xl  font-semibold md:text-4xl lg:text-6xl"> {text} </h1>
    )
}

export function HeadingXXL({text = "XXL Heading yoo", id = null}) {
    return (
        <h1 id={id} className="text-3xl font-semibold md:text-4xl"> {text} </h1>
    )
}