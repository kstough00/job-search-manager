import React from "react"; //imports react library from react
import PositionListItem from "./PositionListItem";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(" + "" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1>Welcome To Job Search Manager!</h1>
      <h4>
        Tired of organizing miscellaneous notes or maticulously updating your
        Excel spreadsheet when searching for a job? Job Search Manager is the
        only application you will need to make your job search simple,
        organized, and stress free. Manage your applied positions details and
        keep track of your application progress all in one place!
      </h4>
      New Positions this Week: {PositionListItem.call.length}
      <br></br>
      <p></p>
      <img src="https://images.techhive.com/images/article/2016/11/technology_resume-100690687-large.jpg"></img>
      <p>
        About- Special 'Thanks' to COVID-19 for making this website possible; I
        was inspired by my current 'Unemployment' status and upcoming Job Search
        curriculum track so that I will finally be able to re-enter the
        workforce and regain some sense of normalcy. I am beyond excited!
      </p>
    </div>
  );
}
