function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
        }, 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }]);
        }, 1500);
    });
}

function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Great post!" },
                { id: 2, text: "Thanks for sharing." }
            ]);
        }, 500);
    });
}

async function fetchAllData() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetchUsers(),
            fetchPosts(),
            fetchComments()
        ]);

        return { users, posts, comments };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

fetchAllData()
    .then(data => {
        console.log("Users:", data.users);
        console.log("Posts:", data.posts);
        console.log("Comments:", data.comments);
    })
    .catch(error => console.error("Failed to fetch all data:", error));