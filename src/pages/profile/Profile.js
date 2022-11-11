import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const {user} = useContext(AuthContext);

    useEffect(() => {
        async function fetchProfileData() {
            const token = localStorage.getItem('token');
            try {
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(result);
                setProfileData((result.data));
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, []);

    return (
        <article className="blue-background row-container-top home">
            <h1>Welcome to your profile page</h1>
            <section>
                <h2>Secret profile-content of {profileData.username}</h2>
                <p>Hyakujo - who was a famous Chinese Zen teacher would work alongside his students even when he reached
                    the ripe old age of 80. His work included tending the gardens keeping the monastery grounds clean
                    and tidy.

                    His students felt he should stop work and rest his aged body but he just would not listen to their
                    advice. So to make him stop they hid away his tools where he couldn't find them.

                    The very next day Hyakujo refused to eat and he repeated this the day after. The students reflected
                    on their actions and decided to put his tools back in the place where he had taken them.

                    That night the Zen master worked and ate as was his normal routine. When he had eaten he told his
                    students “No work, no food”.</p>
            </section>
            <p>Back to <Link to="/">Home</Link></p>
        </article>
    )
}

export default Profile;