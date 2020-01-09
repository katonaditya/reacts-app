const initState = {
    projects: [
        {id: '1', title:'Project 1', content: 'Project content 1'},
        {id: '2', title:'Project 2', content: 'Project content 2'},
        {id: '3', title:'Project 3', content: 'Project content 3'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;