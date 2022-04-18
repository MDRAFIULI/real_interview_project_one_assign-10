import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <h1 className=''>Some Answer for main part</h1>
            <br />
            <div className=''>
                <h2>1. Different between authorization and authentication</h2>
                <h5>Authentication</h5>
                <ul>
                    <li>Authentication হলো কোনো ব্যক্তিকে ভেরিফাই করার প্রকৃয়া</li>
                    <li>Authentication ভেরিফাই প্রকৃয়া সম্পন্ন করে one-time pins, passwords, biometric information ইত্যাদীর মাধ্যমে।</li>
                    <li>Authentication সবসময় আগে করা হয়</li>
                </ul>



                <h5>Authorization</h5>
                <ul>
                    <li>Authorization হলো স্পেসিফিক কোনো files, applications and data ইত্যাদী ভেরিফাই করার প্রকৃয়া।</li>
                    <li>Authorization সিস্টেমে যেসব সেটিংস রয়েছে এর মাধ্যমে Authorization ভেরিফাই প্রকৃয়া সম্পন্ন করে।</li>
                    <li>Authorization সবসময় Authentication এর পরে করা হয়।</li>
                </ul>
                <br />
                <h2>Why i use firebase and what's alternative of firebase.</h2>
                <p>কেন আমি firebase use করি?</p>
                <ul>
                    <li>ফায়ারবেজ দিয়ে কোন ব্যাকএন্ড ছাড়াই চমৎকার ওয়েবপেজ বানানো সম্ভব।</li>
                    <li>সহজে authentication system চালু করা যায়।</li>
                    <li>storage সুবিধা আছে। তাছাড়া আরো অনেক কাজ সম্পন্ন করা যায়।</li>
                </ul>

                <p>some alternatives of firebase are:-</p>
                <ul>
                    <li>Hasura</li>
                    <li>Back4App</li>
                    <li>appwrite</li>
                    <li>Parse</li>
                    <li>Kuzzle</li>
                    <li>Supabase</li>
                    <li>AWS</li>
                    <li>Amplify</li>
                    <li>Backendless</li>
                    <li>Kuzzle</li>
                </ul>
                <br />
                <h2>3.Besides authentication What else can be done by using firebase? </h2>
                <ul>
                    <li>It's a back-end solution to build android,ios or web application.</li>
                    <li>By using firebase you can increase user in your site.</li>
                    <li>firebase stored application data.</li>
                    <li>You can be sent notifiction by using firebase.</li>
                    <li>there is a popular feature that real time data load </li>
                    <li></li>
                </ul>

            </div>
        </div>
    );
};

export default Blog;