

function Projects() {
    return (
        <>
            <h1>NOTE: UNDER CONSTRUCTION</h1>
            <br />
            <br />
            <div className="container container-project">
                <h3>gQSL</h3>
                <b>01/27/2025</b>
                <p>gQSL is a QSL log application that uses the QRZ.com API.  It is currently in the systems design phase.
                    I am hoping to have it up and running in the next 3 months (using React, since everone looooooves React).
                </p>
            </div>
            <br />
            <br />
            <div className="container container-project">
                <h3>API</h3>
                <b>01/27/2025</b>
                <p>In the coming days as I finish converting this website from a Flask application to a React
                    application and adding further updates, I fully intend on adding an API to Rx and send
                    updates to user accounts and to allow the fiddling wiith intended site additions.
                    www.johndurham.dev/api will do as the typical landing route.  Stand by on that.
                </p>
                <p>
                    Moreso, I started developing a QSL log app in the spirit of gnome development.  I thought, what a wonderful
                    idea to use the API available at QRZ.com!!!  Of course, they want money to use the API.  I get that you have 
                    to pay for the web somehow.  I'd like to find a way to keep it super cheap, if not free.  An online logbook 
                    and (what I am calling <a href="https://github.com/kilodelta8/gQSL.git">gQSL</a>) an app that uses the site's API.  This is currently in systems design phase.
                    I am hoping to have it up and running in the next 3 months (using React, since everone looooooves React).
                </p>
                <p>
                    <b>UPDATE:</b>
                    As you can see (and if your new, see the attached pic) I am now running a React app for my personal website.  I am
                    even stealing the styling from the basic React-App.
                </p>
                    <img src="./src/assets/jdDev001.png" alt="The old johndurham.dev" style={{width: '250px', height: '150px'}} />
                <p>
                    I plan to haven account login, commenting, mail preferences added soon.
                    I am thinking about testing the qQSL API from this website before luanching the app and site specific API.
                </p>
            </div>
            <br />
            <br />
            <div className="container container-project">
                <h3>Timber</h3>
                <b>01/13/2025</b>
                <p>Remember Timberman from back in the day?  Yeah, me neither.  Either way, I made a rip off of the game
                    from working through a game development book.  I built the game using the SFML library and C++ on Windows
                    and Linux (deb) and you can download the linux tarball.  It's a .deb installation package.  I plan to add 
                    all of the games I build from the book into one entire app for isntallation.
                </p>
                <ul style={{display: 'grid', placeItems: 'center', minHeight: '25vh;'}}>
                    <li>Download: <a href="./timber-1.0.tar.gz" download="timber-1.0.tar.gz"> timber-1.0.tar.gz</a></li>
                    <li><b>NOTE:</b>If you download and install any software from this site, you do so at your own risk.</li>
                </ul>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container container-project">
                <b>This site is under construction, being converted from Flask to React and updated.</b>
                <h3>Please Stand By!</h3>
            </div>
        </>
    );
};

export default Projects;