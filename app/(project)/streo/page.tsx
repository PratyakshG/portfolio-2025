"use client";

import ProjectPageLayout from "../../../components/ProjectPageLayout";
import { projects } from "../../../constants";

const Page = () => {
  return <ProjectPageLayout project={projects[2]} />;
};

export default Page;
