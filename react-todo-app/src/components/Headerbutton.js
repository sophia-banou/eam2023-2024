import "./../css/student_profile.css";

export default function Button2() {


    return (
        <th id="pb1" onmousedown="btnTab1()" class="active">
            Προσωπικά Στοιχεία
            <script>
                {
                function btnTab1() {
                    
                    document.getElementById("sp-table2").style.backgroundColor = "black";
                    document.getElementById("sp-table3").style.backgroundColor = "black";
                }}

            </script>
        </th>
    )
}