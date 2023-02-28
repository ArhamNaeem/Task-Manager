const not_found = (req, res) => {
    req.status(404).send('Page not found')
}