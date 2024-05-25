document.addEventListener("DOMContentLoaded", function() {
    const totalFollowersElem = document.getElementById('total-followers');
    const facebookFollowers = parseInt(document.getElementById('facebook-followers').innerText, 10);
    const twitterFollowers = parseInt(document.getElementById('twitter-followers').innerText, 10);
    const instagramFollowers = parseInt(document.getElementById('instagram-followers').innerText, 10);

    const totalFollowers = facebookFollowers + twitterFollowers + instagramFollowers;
    totalFollowersElem.innerText = totalFollowers.toLocaleString();
});
