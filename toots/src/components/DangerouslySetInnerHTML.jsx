
const DangerouslySetInnerHTML = () => {
    const maliciousContent = "<script>alert('XSS Attack!');</script>";
    const demoData = `
        <h1>Heading 1</h1>
        <h5>Paragraph 1</h5>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    `;

    const data = `
        <h1>Heading 1</h1>
        <h3>Paragraph 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic illum molestias maiores, consectetur minus adipisci quis iure. Eos vel fugit in beatae tenetur ut dignissimos dolorem! Deserunt quod, laborum ducimus, ea possimus autem reiciendis harum ex vero sint doloribus officia, placeat repudiandae. Ipsam molestias similique minus fugiat ut rerum facilis et, vel quae rem dolore? Similique esse incidunt eum asperiores ut necessitatibus? Obcaecati, reprehenderit, tenetur facilis assumenda iste asperiores nobis adipisci dolorum accusamus et molestias illum, numquam corrupti dolor error eos nihil minus mollitia natus! Blanditiis officia molestias illum beatae odio quam quibusdam consequuntur. Nesciunt quibusdam corrupti nulla debitis.</p>
        <img src="https://i.pinimg.com/736x/03/e1/5f/03e15f3c644d13ac3d2715c2f7ca736a.jpg" alt="random" />

        <h2>Heading 2</h2>
        <h4>Paragraph 2</h4>
        <a href="https://i.pinimg.com/736x/03/e1/5f/03e15f3c644d13ac3d2715c2f7ca736a.jpg">Link</a>
        <ul>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
        </ul>
    `;




    return (
        <>
            <div className="Demo" dangerouslySetInnerHTML={{ __html: demoData }}></div>
            <div className="Demo" dangerouslySetInnerHTML={{ __html: maliciousContent }}></div>
            <div className="Demo" dangerouslySetInnerHTML={{ __html: data }}></div>
        </>
    );
};

export default DangerouslySetInnerHTML;