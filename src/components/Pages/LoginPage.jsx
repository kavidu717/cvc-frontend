  //import './LoginPage.css'
export default function LoginPage() {
    return (
        <div>
            <h1 className="bg-blue-950">Login</h1>

            <form>
                <div>
                    <label>Username</label><br />
                    <input type="text" />
                </div>

                <br />

                <div>
                    <label className="">Password</label><br />
                    <input type="password" />
                </div>

                <br />

                <button type="submit" className="bg-yellow-300">login</button>
            </form>
        </div>
    );
}
