import React from "react";
import "./../css/footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="t-y">
          Το έργο «Προηγμένες Tηλεματικές Yπηρεσίες στο Πανεπιστήμιο Αθηνών
          ΑΘΗΝΑ ΝΕΤ- ΙΙ» έχει ενταχθεί στο Ε.Π. Κοινωνία της Πληροφορίας,
          συγχρηματοδοτείται κατά 75% από το Ευρωπαϊκό Κοινωνικό Ταμείο (EKT)
          και κατά 25% από το Ελληνικό Δημόσιο.
            </div>
            <div className="copyright-container">
              <span className="copyright-container1">
                <p className="copyright">
                  <span className="span">©</span>
                  <span>
                    {" "}
                    Copyright, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών 2023
                  </span>
                </p>
                <p className="copyright">All rights reserved.</p>
              </span>
            </div>
            <img className="image-6-icon" alt="" src="/greek-flag-480.jpg" />
            <img className="image-7-icon" alt="" src="/eurwpaikienwsi.jpg" />
            <img className="image-8-icon" alt="" src="/kps_big.jpg" />
      </div>
    );
}