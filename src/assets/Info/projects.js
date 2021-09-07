import program1Img from '../program1.jpg';
import program2Img from '../program2.jpg';
import program3Img from '../program3.png';
const tags = {
    hot: {
        name: "HOT",
        color: "#E34C26"
    },
    essential: {
        name: "Essential",
        color: "#34a853"
    },
    recommended: {
        name: "Recommended",
        color: "#666666"
    }
}
const projects = [
    {
        "title": "Program 1",
        "description": "Description of Program 1.",
        "link": "",
        "image": program1Img,
        "tags": [tags.essential]
    },
    {
        "title": "Program 2",
        "description": "Description of Program 2.",
        "link": "",
        "image": program2Img,
        "tags": [tags.recommended]
    },
    {
        "title": "Program 3",
        "description": "Description of Program 3.",
        "link": "",
        "image": program3Img,
        "tags": [tags.hot, tags.recommended]
    }
    
]

export default projects;