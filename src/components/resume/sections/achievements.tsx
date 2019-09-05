import React, { FunctionComponent } from "react";

import { Card } from "../../card";

const Achievements: FunctionComponent<PageProps> = ({}) => {
  return <Card padding={true} transparent={true} title="Achievements" />;
};

export interface PageProps {}

export default Achievements;
export { Achievements };
