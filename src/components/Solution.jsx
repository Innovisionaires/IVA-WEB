import '../styles/solution.css';


const Solution = () => {

    const courses = [
        {
            "category": "Arts",
            "color": "#DAD0FB"
        },
        {
            "category": "Programming",
            "color": "#FFEAAE"
        },
        {
            "category": "Design",
            "color": "#CAECFD"
        },
        {
            "category": "Arts",
            "color": "#DAD0FB"
        },
        {
            "category": "Programming",
            "color": "#CAECFD"
        }
    ]

    return (
        <div className="solution" id='solution'>
            <div className="solution-text">
                <div className="text-container">
                    <span className="badge">Our solution</span>
                    <h1>Innovate your learning experience: Learn without limits</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Mauris faucibus tempus feugiat scelerisque proin cursus odio. Ante ac odio arcu tincidunt. Scelerisque est accumsan tristique sollicitudin sit. Pharetra diam lectus sagittis pulvinar enim. Porttitor eros tempus sed faucibus adipiscing id tempor eu mauris. Orci mattis a integer arcu ornare hac.
                    </p>
                </div>
            </div>
            <div className="solution-action-container">
                <div className="slider">
                    <div className="solution-courses solution-courses-1">
                        {courses.map((item, index) => (
                            <div style={{background: item.color}} className="course">{item.category}</div>
                        ))}
                    </div>
                    <div className="solution-courses solution-courses-2">
                        {courses.map((item, index) => (
                            <div style={{background: item.color}} className="course">{item.category}</div>
                        ))}
                    </div>
                </div>
                <div className="slider">
                    <div className="solution-courses solution-courses-1">
                        {courses.map((item, index) => (
                            <div style={{background: item.color}} className="course">{item.category}</div>
                        ))}
                    </div>
                    <div className="solution-courses solution-courses-2">
                        {courses.map((item, index) => (
                            <div style={{background: item.color}} className="course">{item.category}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;