import Layout from "./Layout.js";

export default class extends Layout {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <div class="spread-container">
                <h1>Portfolio for Jonny O</h1>

                <div class="spread-card">
                    <div class="spread-card-header">
                        <h3>Allow Me to Introduce Myself</h3>
                    </div>
                    <div class="spread-card-body">
                        <div class="spread-card-section">
                            <p>In case you were wondering, my name is Jonny O. My entire life I have been fascinated with electronics and technology. I took apart my first VCR when I was around 7, and my first computer when I was about 9. The VCR worked still worked fine until my parents bought their first DVD player (I left that alone, they were expensive when they first came out..), and the computer probably works until this day, wherever it may be. When I was age 11, I started getting into CAD software, I loved being able to turn my thoughts into a digital viewport. For as long as I can remember, I have always wondered how things worked and have always wanted to build things. There has never been an instance when I shared an idea with someone and their response wasn't something along the lines of "Whatever you say there Jonny Boy...". Obviously they were being sarcastic, but, they were right, it was whatever I said... I would get an idea, imagine it inside and out, every last aspect of it; plan it, on paper, with software; then build it. Usually the first attempt wouldn't look too pretty, but it did what my brain kept envisioning! I'd build and rebuild everything multiple times, each time improving it.</p>
                            <p>Once I reached the legal working age, I got my first job. I poured foundations for houses. Through the years, I'd switch between different types of construction work (I wouldn't hesitate to build a house from the foundation to the roof today) and taking classes and piling up certifications for both IT and construction. I worked construction for around 10 years, loved every second of it. The last few years of construction, I was managing multiple teams, overseeing inventory, designing projects for clients using 3D softare, on top of still working in the field most of the day. I made the transition over to IT work when I got a job working Help Desk for an insurance company. I was what you could call the "grunt", but I loved it, my knowledge base was expanding and allowing me to learn how different types of technology tied in with other types of technology! Then I was introduced to networks and databases, I fell in love! I was so intrigued with how data could be transferred and manipulated and combined and saved wherever it needed to be. This was it, I finally found that one thing that allows me to put my thoughts into a digital world. I saw how I could've implemented all of this technology into construction (and every other aspect of my life). If I ever wanted to go back to working construction... houses would build themselves!</p>
                            <p>In 2019, I took a course that taught me how to put this portfolio onto the internet (of course I learned more than just how to make a website). I learned how to build entire systems that could use any type of data in type of way! I was in paradise! To this day, I still wish I had class! It was a class offered by Harvard, the very first of it's kind. Technically, I was the first student ever for this course... I was 4 hours early, all alone waiting for the doors open. 4 weeks in, we had our first group project, we won "Best Use of Tech", we built a text messaging app for autistic children that would tell them if a message they recieved was meant as nice, mean, sarcarstic, funny, etc. I ended up getting an award at graduation, I was elected "Most Likely to Build Skynet" (from The Terminator - side note: my dreams and ambitions will push me to build pretty much the opposite, but I got general idea).</p>
                            <p>It has been about 2 years since I officially became a Software Engineer. Since then, I have been building freelance sites and little side projects in order to keep learning more and perfecting my current skillset. I have my main project that I am always working on, it's called WideSpread. I've built it a few times so far, using a different stack each time. I'm currently building the version of it where I use my own framework allowing it to be single page (this portfolio is actually built with it). It's called SpreadJS. You can find links to both below.</p>
                            <div class="spread-image">
                                <img src="/static/images/jonny+techson.jpeg" />
                            </div>
                            <div class="spread-image">
                                <img src="/static/images/spreadshield_touch-interface_1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        `;
    }
}