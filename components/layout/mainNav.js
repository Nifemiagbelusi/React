import Link from "next/link";

function MainNavigation(){
    return(
        <div>
            <ul>
                <li> <Link href='/about'>about</Link> </li>
                <li> <Link href= '/admin/adminDashboard'>Admin</Link> </li>
                <li> <Link href= '/User/User-login'></Link> </li>
            </ul>
        </div>
    )
}
export default MainNavigationgit