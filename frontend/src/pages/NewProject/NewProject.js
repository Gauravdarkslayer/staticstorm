import { Helmet } from "react-helmet";
import NewDeploy from "../../Components/NewDeploy/NewDeploy";

const NewProject = () => {

  return (
    <>
      <Helmet>
        <title>StaticStorm | New Project</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      <NewDeploy />
    </>
  );
};

export default NewProject;
