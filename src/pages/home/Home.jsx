import Chart from "../../componet/chart/Chart"
import Featuredinfo from "../../componet/featuredinfo/Featuredinfo"
import "./Home.css"
import { userData } from "../../Data"
export default function Home() {
  return (
    <div className="home">
        <Featuredinfo/>
        <Chart data={userData}  title="User Analytics" grid dataKey="Active User" />
    </div>
  )
}
