const addSpacesToNumber = (value: number): string => {
    /* Format value - 100000.123456 -> 100 000.123456*/
    var postfix = value.toString().split(".").slice(1).join(".");
    var formattedValue: string = value.toString().split(".")[0];

    if (value.toString().length > 3){
        var insertBeforeIndex = formattedValue.length - 3;
        while (insertBeforeIndex > 0){
            formattedValue = formattedValue.slice(0, insertBeforeIndex) + " " + formattedValue.slice(insertBeforeIndex);
            insertBeforeIndex = insertBeforeIndex - 3;
        }
    }
    return formattedValue + (postfix !== "" ? "." + postfix: "")
}
export default addSpacesToNumber