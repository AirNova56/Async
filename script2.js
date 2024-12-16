function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId < 100) {
                resolve({ id: userId, name: `User${userId}` }); 
            } else {
                reject(new Error("User ID is too high")); 
            }
        }, 1000); 
    });
}