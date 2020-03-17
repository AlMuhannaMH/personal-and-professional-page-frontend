import React from 'react';

const Profile = props => {
    return (
        <div>
            <aside className="col-md-4">
                <div className="inner">
                    <div>img</div>
                    <h1>name</h1>
                    <h2>label</h2>
                    <ul>
                        <li>email</li>
                    </ul>
                    <ul>
                        <li>link1</li>
                        <li>link2</li>
                    </ul>
                    <p>I built this site with Github repo.</p>
                </div>
            </aside>
            <main >
                <div >
                    <section >
                        <h2>About</h2>
                        <div>aboutData</div>
                    </section>
                </div>
            </main>
        </div>
    )

};

export default Profile;