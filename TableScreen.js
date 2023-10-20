import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Table, Row, Rows, Col } from "react-native-table-component";

const borderColor = "black";
const primaryColor = "red";
const backgroundColor = "white";

export default function TableScreen() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const jsonData = [
    {
      Name: "John Doe",
      Address: "123 Main St",
      Phone: "555-555-5555",
      Area: "Downtown",
      Street: "Elm Street",
      State: "CA",
      Country: "USA",
      Gender: "Male",
      Email: "john@example.com",
      BloodType: "A+",
    },
    {
      Name: "Jane Doe",
      Address: "456 Oak Ave",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Maple Street",
      State: "NY",
      Country: "USA",
      Gender: "Female",
      Email: "jane@example.com",
      BloodType: "B-",
    },
    {
      Name: "James Smith",
      Address: "789 Pine Rd",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Oak Street",
      State: "TX",
      Country: "USA",
      Gender: "Male",
      Email: "james@example.com",
      BloodType: "O+",
    },
    {
      Name: "Emily Johnson",
      Address: "101 Willow Ln",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Birch Street",
      State: "FL",
      Country: "USA",
      Gender: "Female",
      Email: "emily@example.com",
      BloodType: "AB+",
    },
    {
      Name: "Michael Brown",
      Address: "202 Cedar Dr",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Cedar Street",
      State: "IL",
      Country: "USA",
      Gender: "Male",
      Email: "michael@example.com",
      BloodType: "B+",
    },
    {
      Name: "Sarah Davis",
      Address: "303 Redwood Ln",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Redwood Street",
      State: "GA",
      Country: "USA",
      Gender: "Female",
      Email: "sarah@example.com",
      BloodType: "A-",
    },
    {
      Name: "Robert Wilson",
      Address: "404 Birch Rd",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Birch Street",
      State: "OH",
      Country: "USA",
      Gender: "Male",
      Email: "robert@example.com",
      BloodType: "AB-",
    },
    {
      Name: "Linda Taylor",
      Address: "505 Maple Dr",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Maple Street",
      State: "MI",
      Country: "USA",
      Gender: "Female",
      Email: "linda@example.com",
      BloodType: "O-",
    },
    {
      Name: "David Martinez",
      Address: "606 Pine Ln",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Pine Street",
      State: "PA",
      Country: "USA",
      Gender: "Male",
      Email: "david@example.com",
      BloodType: "B-",
    },
    {
      Name: "Susan Harris",
      Address: "707 Cedar Rd",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Cedar Street",
      State: "NJ",
      Country: "USA",
      Gender: "Female",
      Email: "susan@example.com",
      BloodType: "A+",
    },
    {
      Name: "Paula Clark",
      Address: "808 Oak Ln",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Oak Street",
      State: "MA",
      Country: "USA",
      Gender: "Female",
      Email: "paula@example.com",
      BloodType: "O+",
    },
    {
      Name: "William Lee",
      Address: "909 Elm Dr",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Elm Street",
      State: "CO",
      Country: "USA",
      Gender: "Male",
      Email: "william@example.com",
      BloodType: "B+",
    },
    {
      Name: "Karen Jackson",
      Address: "1010 Maple Rd",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Maple Street",
      State: "TX",
      Country: "USA",
      Gender: "Female",
      Email: "karen@example.com",
      BloodType: "A+",
    },
    {
      Name: "Richard Baker",
      Address: "1111 Pine Ln",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Pine Street",
      State: "CA",
      Country: "USA",
      Gender: "Male",
      Email: "richard@example.com",
      BloodType: "AB-",
    },
    {
      Name: "Nancy Turner",
      Address: "1212 Cedar Dr",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Cedar Street",
      State: "FL",
      Country: "USA",
      Gender: "Female",
      Email: "nancy@example.com",
      BloodType: "O+",
    },
    {
      Name: "Christopher Green",
      Address: "1313 Elm Rd",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Elm Street",
      State: "OH",
      Country: "USA",
      Gender: "Male",
      Email: "christopher@example.com",
      BloodType: "A-",
    },
    {
      Name: "Margaret Brown",
      Address: "1414 Oak Ave",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Oak Street",
      State: "TX",
      Country: "USA",
      Gender: "Female",
      Email: "margaret@example.com",
      BloodType: "B+",
    },
    {
      Name: "Mark Taylor",
      Address: "1515 Pine Ln",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Pine Street",
      State: "CA",
      Country: "USA",
      Gender: "Male",
      Email: "mark@example.com",
      BloodType: "AB-",
    },
    {
      Name: "Deborah Turner",
      Address: "1616 Cedar Dr",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Cedar Street",
      State: "NY",
      Country: "USA",
      Gender: "Female",
      Email: "deborah@example.com",
      BloodType: "O-",
    },
    {
      Name: "Matthew Johnson",
      Address: "1717 Elm Rd",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Elm Street",
      State: "NJ",
      Country: "USA",
      Gender: "Male",
      Email: "matthew@example.com",
      BloodType: "A+",
    },
    {
      Name: "Betty Wilson",
      Address: "1818 Oak Dr",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Oak Street",
      State: "FL",
      Country: "USA",
      Gender: "Female",
      Email: "betty@example.com",
      BloodType: "B+",
    },
    {
      Name: "Gary Harris",
      Address: "1919 Pine Rd",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Pine Street",
      State: "TX",
      Country: "USA",
      Gender: "Male",
      Email: "gary@example.com",
      BloodType: "O+",
    },
    {
      Name: "Dorothy Clark",
      Address: "2020 Cedar Ln",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Cedar Street",
      State: "CA",
      Country: "USA",
      Gender: "Female",
      Email: "dorothy@example.com",
      BloodType: "AB-",
    },
    {
      Name: "Steven Davis",
      Address: "2121 Willow Rd",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Willow Street",
      State: "NY",
      Country: "USA",
      Gender: "Male",
      Email: "steven@example.com",
      BloodType: "A-",
    },
    {
      Name: "Donna Turner",
      Address: "2222 Maple Ave",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Maple Street",
      State: "TX",
      Country: "USA",
      Gender: "Female",
      Email: "donna@example.com",
      BloodType: "O-",
    },
    {
      Name: "Jose Wilson",
      Address: "2323 Birch Rd",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Birch Street",
      State: "OH",
      Country: "USA",
      Gender: "Male",
      Email: "jose@example.com",
      BloodType: "B-",
    },
    {
      Name: "Catherine Turner",
      Address: "2424 Pine Dr",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Pine Street",
      State: "FL",
      Country: "USA",
      Gender: "Female",
      Email: "catherine@example.com",
      BloodType: "A+",
    },
    {
      Name: "Daniel Brown",
      Address: "2525 Oak Ln",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Oak Street",
      State: "MI",
      Country: "USA",
      Gender: "Male",
      Email: "daniel@example.com",
      BloodType: "B+",
    },
    {
      Name: "Laura Martinez",
      Address: "2626 Elm Rd",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Elm Street",
      State: "TX",
      Country: "USA",
      Gender: "Female",
      Email: "laura@example.com",
      BloodType: "O+",
    },
    {
      Name: "Timothy Harris",
      Address: "2727 Willow Dr",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Willow Street",
      State: "CA",
      Country: "USA",
      Gender: "Male",
      Email: "timothy@example.com",
      BloodType: "AB-",
    },
    {
      Name: "Jessica Lee",
      Address: "2828 Cedar Rd",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Cedar Street",
      State: "NJ",
      Country: "USA",
      Gender: "Female",
      Email: "jessica@example.com",
      BloodType: "A-",
    },
    {
      Name: "Ronald Turner",
      Address: "2929 Pine Ln",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Pine Street",
      State: "FL",
      Country: "USA",
      Gender: "Male",
      Email: "ronald@example.com",
      BloodType: "B+",
    },
    {
      Name: "Sharon Johnson",
      Address: "3030 Elm Ave",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Elm Street",
      State: "NY",
      Country: "USA",
      Gender: "Female",
      Email: "sharon@example.com",
      BloodType: "AB+",
    },
    {
      Name: "George Baker",
      Address: "3131 Oak Rd",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Oak Street",
      State: "CA",
      Country: "USA",
      Gender: "Male",
      Email: "george@example.com",
      BloodType: "O+",
    },
    {
      Name: "Rebecca Davis",
      Address: "3232 Pine Dr",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Pine Street",
      State: "NJ",
      Country: "USA",
      Gender: "Female",
      Email: "rebecca@example.com",
      BloodType: "A-",
    },
    {
      Name: "Samuel Wilson",
      Address: "3333 Cedar Ln",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Cedar Street",
      State: "NY",
      Country: "USA",
      Gender: "Male",
      Email: "samuel@example.com",
      BloodType: "B-",
    },
    {
      Name: "Evelyn Turner",
      Address: "3434 Maple Ave",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Maple Street",
      State: "TX",
      Country: "USA",
      Gender: "Female",
      Email: "evelyn@example.com",
      BloodType: "A+",
    },
    {
      Name: "Kenneth Baker",
      Address: "3535 Birch Rd",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Birch Street",
      State: "OH",
      Country: "USA",
      Gender: "Male",
      Email: "kenneth@example.com",
      BloodType: "O+",
    },
    {
      Name: "Alice Harris",
      Address: "3636 Pine Ln",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Pine Street",
      State: "FL",
      Country: "USA",
      Gender: "Female",
      Email: "alice@example.com",
      BloodType: "AB-",
    },
    {
      Name: "Charles Clark",
      Address: "3737 Cedar Dr",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Cedar Street",
      State: "CA",
      Country: "USA",
      Gender: "Male",
      Email: "charles@example.com",
      BloodType: "A-",
    },
    {
      Name: "Diane Taylor",
      Address: "3838 Willow Rd",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Willow Street",
      State: "TX",
      Country: "USA",
      Gender: "Female",
      Email: "diane@example.com",
      BloodType: "B+",
    },
    {
      Name: "Joseph Martinez",
      Address: "3939 Cedar Ave",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Cedar Street",
      State: "NJ",
      Country: "USA",
      Gender: "Male",
      Email: "joseph@example.com",
      BloodType: "O+",
    },
    {
      Name: "Frances Wilson",
      Address: "4040 Maple Rd",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Maple Street",
      State: "MI",
      Country: "USA",
      Gender: "Female",
      Email: "frances@example.com",
      BloodType: "AB-",
    },
    {
      Name: "Gary Harris",
      Address: "4141 Pine Dr",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Pine Street",
      State: "TX",
      Country: "USA",
      Gender: "Male",
      Email: "gary@example.com",
      BloodType: "A+",
    },
    {
      Name: "Janet Turner",
      Address: "4242 Elm Ln",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Elm Street",
      State: "FL",
      Country: "USA",
      Gender: "Female",
      Email: "janet@example.com",
      BloodType: "B+",
    },
    {
      Name: "Ryan Lee",
      Address: "4343 Oak Ave",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Oak Street",
      State: "MI",
      Country: "USA",
      Gender: "Male",
      Email: "ryan@example.com",
      BloodType: "O+",
    },
    {
      Name: "Cynthia Davis",
      Address: "4444 Willow Rd",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Willow Street",
      State: "NY",
      Country: "USA",
      Gender: "Female",
      Email: "cynthia@example.com",
      BloodType: "AB-",
    },
    {
      Name: "Steven Baker",
      Address: "4545 Cedar Rd",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Cedar Street",
      State: "TX",
      Country: "USA",
      Gender: "Male",
      Email: "steven@example.com",
      BloodType: "A-",
    },
    {
      Name: "Carol Clark",
      Address: "4646 Birch Ln",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Birch Street",
      State: "CA",
      Country: "USA",
      Gender: "Female",
      Email: "carol@example.com",
      BloodType: "B+",
    },
    {
      Name: "Ronald Turner",
      Address: "4747 Pine Ave",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Pine Street",
      State: "NJ",
      Country: "USA",
      Gender: "Male",
      Email: "ronald@example.com",
      BloodType: "O+",
    },
    {
      Name: "Nancy Wilson",
      Address: "4848 Maple Rd",
      Phone: "555-555-5555",
      Area: "Suburb",
      Street: "Maple Street",
      State: "NY",
      Country: "USA",
      Gender: "Female",
      Email: "nancy@example.com",
      BloodType: "AB-",
    },
    {
      Name: "David Turner",
      Address: "4949 Elm Dr",
      Phone: "555-555-5555",
      Area: "Rural",
      Street: "Elm Street",
      State: "FL",
      Country: "USA",
      Gender: "Male",
      Email: "david@example.com",
      BloodType: "A-",
    },
    {
      Name: "Laura Martinez",
      Address: "5050 Oak Ave",
      Phone: "555-555-5555",
      Area: "Urban",
      Street: "Oak Street",
      State: "TX",
      Country: "USA",
      Gender: "Female",
      Email: "laura@example.com",
      BloodType: "B+",
    },
  ];

  const state = {
    tableHead: [
      "Address",
      "Phone",
      "Area",
      "Street",
      "State",
      "Country",
      "Gender",
      "Email",
      "Blood Type",
    ],
    widthArr: [100, 100, 100, 100, 100, 100, 100, 100, 100],
  };

  const headerHeight = 40;
  const leftColumnWidth = 100;

  const recordData = jsonData.map((item) => [item.Name]);

  const tableData = jsonData.map((item) => [
    item.Address,
    item.Phone,
    item.Area,
    item.Street,
    item.State,
    item.Country,
    item.Gender,
    item.Email,
    item.BloodType,
  ]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#eee",
        marginTop: 37.5,
      }}
    >
      {/* Left Column */}
      <View
        style={{
          width: leftColumnWidth,
          backgroundColor: "red",
          borderRightWidth: 1,
          borderRightColor: borderColor,
        }}
      >
        {/* Blank Cell */}
        <View
          style={{
            height: headerHeight,
            backgroundColor: "red",
            borderBottomWidth: 1,
            borderBottomColor: borderColor,
            height: 50,
          }}
        >
          <Text
            style={{
              color: "white",
              marginTop: 17.5,
              textAlign: "center",
            }}
          >
            Names
          </Text>
        </View>
        {/* Left Container : scroll synced */}
        <ScrollView
          ref={leftRef}
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        >
          <Table
            borderStyle={{
              borderWidth: 1,
              borderColor,
              // height:50
            }}
          >
            {recordData.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                widthArr={[leftColumnWidth]}
                style={styles.row2}
                textStyle={styles.text2}
                height={50}
              />
            ))}
          </Table>
        </ScrollView>
      </View>
      {/* Right Column */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <ScrollView horizontal={true} bounces={false}>
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor }}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.head}
                textStyle={{ ...styles.text, color: "white" }}
              />
            </Table>
            <ScrollView
              ref={rightRef}
              style={styles.dataWrapper}
              scrollEventThrottle={16}
              bounces={false}
              onScroll={(e) => {
                const { y } = e.nativeEvent.contentOffset;
                leftRef.current?.scrollTo({ y, animated: false });
              }}
            >
              <Table borderStyle={{ borderWidth: 1, borderColor }}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
                    style={index % 2 ? styles.row : { backgroundColor }}
                    textStyle={styles.text}
                    height={50}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#eee" },
  head: { height: 50, backgroundColor: primaryColor },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
  row: { height: 50 },
  row2: { height: 50, backgroundColor: "red", color: "white" },
  text: { textAlign: "center" },
  text2: { textAlign: "center", color: "white" },
  dataWrapper: { marginTop: -1 },
});
