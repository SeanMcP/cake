export default function Action(name, submitHandler) {
    this.form = document.querySelector(`form[data-action="${name}"`)

    if (!this.form) {
        return console.error('Could not find action:', name)
    }

    const action = {
        container: this.form,
        name
    }

    const childrenKey = `data-${name}`

    this.form.querySelectorAll(`[${childrenKey}]`).forEach(node => {
        action[node.getAttribute(childrenKey)] = node
    })

    this.form.addEventListener('submit', (event, ...args) => {
        event.preventDefault()
        event.action = action
        submitHandler(event, ...args)
    })
}
