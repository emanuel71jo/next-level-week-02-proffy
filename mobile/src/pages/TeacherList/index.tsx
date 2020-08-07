import React from "react";
import { View } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";

const TeacherList: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader />
    </View>
  );
};

export default TeacherList;
