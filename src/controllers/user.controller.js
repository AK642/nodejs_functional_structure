/** GET API: Get all users. */
export const getUser = async (req, res) => {
    try {
        console.log("User GET API...");

        res.send("User GET API..");
    } catch(err) {
        console.log("Error: ", err);
    }
};