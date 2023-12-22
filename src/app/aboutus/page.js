import { Fragment } from "react";
import details from "./data";
import Link from "next/link";

const page = () => {
  // console.log(details);
  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>AboutUs Page</div>
      <div>
        <ul>
          {details.map((dev) => (
            <li>
              <Link href={`/aboutus/${dev.id}`}>{dev.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default page;
