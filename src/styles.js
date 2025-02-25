const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingTop: 20,
    },
    appHeader: {
        fontSize: 30,
        color: "red",
        textTransform: "uppercase",
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#aeaeae",
        width: "90%",
        marginVertical: 10,
        height: 50,
        padding: 10,
        borderRadius: 5,
    },
    submitBtn: {
        width: "50%",
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
    },
    filterContainer: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
    },
    filterBtn: {
        width: "30%",
        backgroundColor: "#ffffff",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
    },
    activeFilterBtn: {
        backgroundColor: "black",
    },
    activeFilterText: {
        color: "white",
    },
    todosContainer: {
        marginTop: 10,
        width: "90%",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
    },
});
export default styles;