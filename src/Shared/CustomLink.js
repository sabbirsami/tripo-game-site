import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <>
            <Link
                style={{
                    fontSize: "16px",
                    fontFamily: "rubik",
                    padding: " 17px 30px",
                    fontWeight: "400",
                    textDecoration: "none",
                    color: match ? "white" : "black",
                    backgroundColor: match ? " #dc3545" : "",
                    borderRadius: match ? "0 0 15px 15px" : "none",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </>
    );
};

export default CustomLink;
