import "./Contact.css"
function Contact(){
    return(
        <div className="maincontainer">
            <h1 className="Heading">CONTACT INFORMATION</h1>
            <div>
                <a href='index.html' id='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="phone"><path fill="#444" d="m15.88 3.86-.61-1.31a1.214 1.214 0 0 0-.792-.658c-1.938-.528-4.161-.851-6.453-.891a27.46 27.46 0 0 0-6.687.934c-.165.048-.453.29-.605.609L.12 3.861a1.195 1.195 0 0 0-.12.52v.87l-.001.041c0 .392.318.71.71.71l.033-.001H3.26a.76.76 0 0 0 .742-.76L4 5.188v-.85a.65.65 0 0 1 .298-.546 6.913 6.913 0 0 1 3.724-.791 6.965 6.965 0 0 1 3.717.788c.143.099.262.3.262.529v.872a.76.76 0 0 0 .739.81h2.521l.031.001a.71.71 0 0 0 .71-.71l-.001-.043V4.38a1.208 1.208 0 0 0-.123-.527z"></path><path fill="#444" d="M12 8.3a4.73 4.73 0 0 1-1.001-2.92L11 5.296V5h-1v1H6V5H5v.33l.001.08a4.74 4.74 0 0 1-1.009 2.93L1 12v3h14v-3zM8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path><path fill="#444" d="M10 10a2 2 0 1 1-3.999.001A2 2 0 0 1 10 10z"></path></svg> 
                </a>
                <div className="subflex
                ">
                <p >phone: 7989638760</p>
                <p >Email: tskumar329@gmail.com</p>
                </div>


            </div>
        </div>
        
    );
}
export default Contact