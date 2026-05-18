"use client"

import { useEffect, useState } from "react"

const questions = [
    {
        id: 1,
        question:
            "Accounts are “Statements of facts relating to money or things having money value”. The 'facts' that are incorporated in accounting records are described as ________.",
        options: [
            "No option is correct",
            "Transactions",
            "Numbers",
            "Entries",
        ],
        answer: 3,
    },

    {
        id: 2,
        question:
            "The pay and allowances of the Comptroller and Auditor-General and the administrative expenses of his personal office shall be ______?",
        options: [
            "Voted upon the Consolidated Fund of India",
            "Voted upon the Contingency Fund of India",
            "Charged upon the Consolidated Fund of India",
            "Charged upon the Contingency Fund of India",
        ],
        answer: 0,
    },

    {
        id: 3,
        question:
            "Which of the following information shall contain in the Challan which accompanies a payment of money into the treasury or to the Bank?",
        options: [
            "The head of account",
            "All options are correct",
            "The amount",
            "The nature of payment",
        ],
        answer: 0,
    },

    {
        id: 4,
        question:
            "A Government Servant expired while in service after rendering (28) years of qualifying service. For calculation of Death-cum-Retirement Gratuity, how many years of weightage shall be added?",
        options: [
            "Five years",
            "In this case no weightage shall be allowed",
            "Three years",
            "Four years",
        ],
        answer: 2,
    },

    {
        id: 5,
        question:
            "While calculating pension, where the amount of pension is less than Rs. 9500/- per month, the Pension shall be raised to _______.",
        options: [
            "Rs 10000/- per month",
            "Rs 9500/- per month",
            "No option is correct",
            "No question of raising",
        ],
        answer: 0,
    },

    {
        id: 6,
        question:
            "In the case of Government servant retiring after the 10th September,1983 in calculating the length of service, a fraction of a year equal to ________ shall be treated as a completed one-half year?",
        options: [
            "Nine months or more",
            "Six months or more",
            "No option is correct",
            "Three months or more",
        ],
        answer: 0,
    },

    {
        id: 7,
        question: "Is Rescinding of Commutation of Pension permissible?",
        options: [
            "Permissible on refund of its capitalized value",
            "Permissible up to 50 percent",
            "Not permissible",
            "No option is correct",
        ],
        answer: 0,
    },

    {
        id: 8,
        question:
            "Date of effect of sanction in the case of executive orders issued by the President?",
        options: [
            "Take effect from the date on which they are passed",
            "Take effect from the date of issue of dispatch letter or telegram containing the orders",
            "No option is correct",
            "Date of presenting bill in the Parliament",
        ],
        answer: 1,
    },

    {
        id: 9,
        question:
            "The excess of receipts over expenditure in the three accounts of the state is known as ________?",
        options: [
            "Budget Deficit",
            "Budget Release Order",
            "Budget Surplus",
            "Budget Estimates",
        ],
        answer: 0,
    },

    {
        id: 10,
        question:
            "A Government servant declared permanently incapacitated for further service may be granted ___________.",
        options: [
            "Compulsory Retirement Pension",
            "Retiring Pension",
            "Compensation Pension",
            "Invalid Pension",
        ],
        answer: 0,
    },

    {
        id: 11,
        question:
            "Comptroller and Auditor-General of India, on his retirement, resignation or removal, would _________ for any other office under the Government?",
        options: [
            "No option is correct",
            "be eligible after (5) years",
            "be eligible",
            "not be eligible",
        ],
        answer: 0,
    },

    {
        id: 12,
        question:
            "In how many years ‘Travelling allowance bills and acquittance rolls relating to travelling allowance’ should be preserved in the office?",
        options: [
            "Two years",
            "Five years",
            "Three years",
            "One year",
        ],
        answer: 0,
    },

    {
        id: 13,
        question:
            "The amounts of receipts and disbursements for the Financial Year beginning on April 1st and ending on March 31st following, as finally recorded in the Accountant General’s books is called as _______.",
        options: [
            "Accounts or actuals of a year",
            "Appropriation",
            "No option is correct",
            "Budget",
        ],
        answer: 0,
    },

    {
        id: 14,
        question:
            "All work done otherwise than by daily labour and all supplies relating to a work should be paid for on the basis of measurements recorded in a ______.",
        options: [
            "attendance register",
            "muster roll",
            "No option is correct",
            "measurement book",
        ],
        answer: 3,
    },

    {
        id: 15,
        question:
            "Taxes on Income other than agricultural income shall be levied and collected by the Government of India and distributed between the _______.",
        options: [
            "Union and State in the manner provided in clause (2) of Article 269",
            "No option is correct",
            "Union and State in the manner provided in clause (2) of Article 271",
            "Union and State in the manner provided in clause (2) of Article 270",
        ],
        answer: 0,
    },

    {
        id: 16,
        question:
            "A four-digit numerical code has been assigned to the Major Head of Account. 1st digit in the Major Head under Revenue Expenditure heads is either _______ ?",
        options: [
            "6 or 7",
            "4 or 5",
            "0 or 1",
            "2 or 3",
        ],
        answer: 0,
    },

    {
        id: 17,
        question:
            "To whom the reports of the Comptroller and Auditor-General of India relating to the accounts of the Union shall be submitted?",
        options: [
            "Rajya Sabha",
            "Prime Minister of India",
            "Lok Sabha",
            "President of India",
        ],
        answer: 3,
    },

    {
        id: 18,
        question:
            "Which of the following certificates shall be recorded on the arrear bill under his dated signature by the Drawing Officer?",
        options: [
            "That a note of the arrear claim has been made",
            "Both certificates are correct",
            "No option is correct",
            "That no part of the amount claimed has been drawn previously",
        ],
        answer: 0,
    },

    {
        id: 19,
        question:
            "Under Rule 50 of The Telangana Revised Pension Rules 1980, who are the family members under Category II for grant of family pension?",
        options: [
            "Mother",
            "Unmarried/widowed/divorced daughter",
            "Father",
            "All options are correct",
        ],
        answer: 3,
    },

    {
        id: 20,
        question:
            "Which of the following items are not included within the scope of clause (a) of Treasury Rule 7(2)",
        options: [
            "Charges for the conveyance of attached property",
            "Commissions fees",
            "Income from properties relating to endowments",
            "Judgement debtors subsistency money",
        ],
        answer: 3,
    },
    {
        id: 21,
        question:
            "Pension Fund Regulatory and Development Authority of India was established on",
        options: [
            "15th Aug 2003",
            "14th Nov 2004",
            "2nd Oct 2005",
            "23rd Aug 2002",
        ],
        answer: 3,
    },

    {
        id: 22,
        question:
            "Which of the following is not general services as per budget manual",
        options: [
            "Organs of state",
            "Fiscal Service",
            "Administrative Service",
            "Transport and Communication",
        ],
        answer: 2,
    },

    {
        id: 23,
        question:
            '"Vote on Account bill" can be passed by the legislative assembly under which Article of Constitution of India?',
        options: [
            "Article 206",
            "Article 208",
            "Article 209",
            "Article 210",
        ],
        answer: 0,
    },

    {
        id: 24,
        question:
            "The AP Fiscal Responsibility and Budget Management Act Came into existence in the year",
        options: [
            "2003",
            "2004",
            "2005",
            "2006",
        ],
        answer: 2,
    },

    {
        id: 25,
        question:
            "The bill when consented by the governor is known as Appropriation Act under para of APBM",
        options: [
            "18-8",
            "18-5",
            "18-4",
            "18-6",
        ],
        answer: 3,
    },

    {
        id: 26,
        question:
            "Comptroller and Auditor General of India (CAG) shall be appointed by president under",
        options: [
            "Article 146",
            "Article 147",
            "Article 148",
            "Article 149",
        ],
        answer: 2,
    },

    {
        id: 27,
        question:
            "Departmental enquiries regarding frauds, etc. in which government servants are involved is defined under which Article?",
        options: [
            "Article 298",
            "Article 301",
            "Article 303",
            "Article 305",
        ],
        answer: 2,
    },

    {
        id: 28,
        question:
            "Group Insurance scheme(GIS) revised rate of interest%?",
        options: [
            "9.7%",
            "7.9%",
            "8%",
            "8.7%",
        ],
        answer: 1,
    },

    {
        id: 29,
        question:
            "A Government employee retired from service on 31.12.2019 with qualifying service of 33 years-2 months-4 days with weightage of 5 years. His pay as on retirement is Rs.42490/- Calculate gratuity?",
        options: [
            "Rs.8,72,112/-",
            "Rs.8,62,132/-",
            "Rs.8,92,122/-",
            "Rs.8,82,142/-",
        ],
        answer: 3,
    },

    {
        id: 30,
        question:
            "The Appropriation bill will be submitted to _______ for His/Her Assent",
        options: [
            "Governor",
            "Speaker",
            "Chief Minister",
            "None of the above",
        ],
        answer: 0,
    },

    {
        id: 31,
        question:
            "Pensions Drawn Bill APTC Form",
        options: [
            "APTC Form-78",
            "APTC Form-77",
            "APTC Form-76",
            "APTC Form -75",
        ],
        answer: 2,
    },

    {
        id: 32,
        question:
            "Minor work estimated cost should not exceed",
        options: [
            "1000000",
            "2000000",
            "1500000",
            "500000",
        ],
        answer: 2,
    },

    {
        id: 33,
        question:
            "A retired government servant must submit _____ certificate from drawing and disbursing officer as per G.O.Ms.No.787 Fin,(Pen-I) Dept., dt.10.4.2002 to treasury officer to receive pension",
        options: [
            "No dues Certificate",
            "First Pension Certificate",
            "Family members Certificate",
            "None of the above",
        ],
        answer: 0,
    },

    {
        id: 34,
        question:
            "Anticipatory gratuity is sanctioned upto ________% of a retired government servant",
        options: [
            "50%",
            "75%",
            "80%",
            "90%",
        ],
        answer: 2,
    },

    {
        id: 35,
        question:
            "The Treasury Bill Register should be reviewed by the Drawing and Disbursing Officer under APTC",
        options: [
            "Once in Month",
            "Once in a year",
            "Bi-weekly",
            "Once in six months",
        ],
        answer: 0,
    },

    {
        id: 36,
        question:
            "Difference between Revenue expenditure and total revenue receipts is called as",
        options: [
            "Budget Deficit",
            "Fiscal Deficit",
            "Revenue Deficit",
            "Primary Deficit",
        ],
        answer: 1,
    },

    {
        id: 37,
        question:
            "RPS 2015 came into existence.",
        options: [
            "01.08.2013",
            "01.07.2014",
            "01.07.2015",
            "01.07.2013",
        ],
        answer: 0,
    },

    {
        id: 38,
        question:
            "CFMS stands for",
        options: [
            "Centralised Funds Management System",
            "Comprehensive Financial Management System",
            "Capital Funds Management System",
            "Centralised Financial Management System",
        ],
        answer: 3,
    },

    {
        id: 39,
        question:
            "The Role of the Finance commission in centre-state fiscal relations has been undetermined by the",
        options: [
            "State Governments",
            "Zonal Councils",
            "Planning Commission",
            "Central Government",
        ],
        answer: 0,
    },

    {
        id: 40,
        question:
            "The maximum limit of retirement gratuity under in RPS 2015 is",
        options: [
            "8 lakhs",
            "12 lakhs",
            "15 lakhs",
            "20 lakhs",
        ],
        answer: 1,
    },
    {
        id: 41,
        question:
            "Pay Bill Register APTC Form",
        options: [
            "APTC Form-101",
            "APTC Form-104",
            "APTC Form-106",
            "APTC Form-109",
        ],
        answer: 3,
    },

    {
        id: 42,
        question:
            "The Treasury Rule in which instructions are issued with regard to forwarding of Specimen Signature of the drawing Officer to the Treasury?",
        options: [
            "Treasury Rule 10",
            "Treasury Rule 16",
            "Treasury Rule 23",
            "Treasury Rule 29",
        ],
        answer: 0,
    },

    {
        id: 43,
        question:
            "Is family pensioner having employment on direct recruitment eligible for DR and IR in family pension?",
        options: [
            "Only DR",
            "Only IR",
            "Both DR and IR",
            "No DR and IR",
        ],
        answer: 0,
    },

    {
        id: 44,
        question:
            "A Government employee retired from service on 31.12.2019 His Service pension is fixed at Rs.21245/- Calculate Commutation?",
        options: [
            "Rs.8,25,786/-",
            "Rs.8,35,592/-",
            "Rs.8,45,665/-",
            "Rs.8,70,128/-",
        ],
        answer: 2,
    },

    {
        id: 45,
        question:
            "Expenditure head 2051 represents",
        options: [
            "District Administration",
            "Public Service Commission",
            "Police",
            "Jails",
        ],
        answer: 1,
    },

    {
        id: 46,
        question:
            "What is the minimum service period required for sanction of pension on voluntary retirement under Rule 43 of Andhra Pradesh Revised Pension Rules, 1980",
        options: [
            "18 years",
            "20 years",
            "23 years",
            "25 years",
        ],
        answer: 1,
    },

    {
        id: 47,
        question: "Match the following",
        options: [
            "a-i, b-ii, c-iii, d-iv",
            "a-iv, b-iii, c-ii, d-i",
            "a-iii, b-i, c-iv, d-ii",
            "a-iii, b-iv, c-i, d-ii",
        ],
        answer: 3,
    },

    {
        id: 48,
        question:
            "CAG submits reports to President/Governor of a state under",
        options: [
            "Article 150",
            "Article 151",
            "Article 152",
            "Article 148",
        ],
        answer: 1,
    },

    {
        id: 49,
        question:
            "A Security deposit taken from Government servant should be retained for at least _______ months? (Article 288 APFC Vol-1)",
        options: [
            "3",
            "6",
            "9",
            "12",
        ],
        answer: 0,
    },

    {
        id: 50,
        question:
            "The Family Beneficiary of the CPS Subscriber will submit the following Form to withdraw accumulated wealth pension",
        options: [
            "Form S2",
            "Form 103-GD",
            "Form 101-GS",
            "None of the above",
        ],
        answer: 1,
    },

    {
        id: 51,
        question:
            "Maximum days an Out Sourcing & Contract married woman employee eligible for maternity leave is",
        options: [
            "14 Days",
            "60 Days",
            "120 Days",
            "180 Days",
        ],
        answer: 3,
    },

    {
        id: 52,
        question:
            "A Certificate to the effect that vehicle is receiving in good condition should be furnished under which Article of AP Financial code",
        options: [
            "Article 96",
            "Article 97",
            "Article 98",
            "Article 99",
        ],
        answer: 2,
    },

    {
        id: 53,
        question:
            "Contingency fund of state may be established for",
        options: [
            "Speaker",
            "Council of minister",
            "Legislature",
            "Governor",
        ],
        answer: 2,
    },

    {
        id: 54,
        question:
            "The Major Head for claiming of Boster Scheme bill is",
        options: [
            "2202",
            "2225",
            "2235",
            "2245",
        ],
        answer: 3,
    },

    {
        id: 55,
        question:
            "A Treasury Officer shall not honour a claim which he considers to be disputable under",
        options: [
            "TR 18",
            "TR 19",
            "TR 20",
            "TR 21",
        ],
        answer: 0,
    },

    {
        id: 56,
        question:
            "Minimum service required for getting Service Gratuity is as per APRPR, 1980 (Rule 46(1))",
        options: [
            "5 years",
            "10 years",
            "20 Years",
            "25 Years",
        ],
        answer: 1,
    },

    {
        id: 57,
        question:
            "Under which Form of PWA code the Divisional officer prepares a monthly statement for each Major Head",
        options: [
            "Form VII",
            "Form VIII",
            "Form IX",
            "Form X",
        ],
        answer: 2,
    },

    {
        id: 58,
        question:
            "The Governor has no power to return the money bill without her/his assent under Article _______of the Indian Constitution",
        options: [
            "Article 199",
            "Article 200",
            "Article 207",
            "Article 210",
        ],
        answer: 3,
    },

    {
        id: 59,
        question:
            "In cases where the pensioner desires to commute a portion of pension after the expiry of period of one year from the date of retirement, select the procedure for sanction",
        options: [
            "Medical examination of the District Medical & Health Officer concerned is compulsory",
            "The pension sanctioning authority should sanction after medical examination conducted by the District Medical Board",
            "The Head of the Department permission is required for medical examination",
            "Seeks the Govt. permission for conduct of Medical examination",
        ],
        answer: 1,
    },

    {
        id: 60,
        question:
            "Demands for grants are submitted to",
        options: [
            "Governor",
            "Cabinet",
            "Chief Minister",
            "Legislative Assembly",
        ],
        answer: 3,
    },
    {
        id: 61,
        question:
            "Match the following matchings are false",
        options: [
            "Article 202–Annual Financial Statement",
            "Article 203-Procedure in Legislature with respect to estimates",
            "Article 204- Appropriation Bills",
            "Article 205-Consolidated fund of the State",
        ],
        answer: 1,
    },

    {
        id: 62,
        question:
            "Authority in which the additional quantum of pension to the pensioners/Family pensioners have been admitted",
        options: [
            "G.O.Ms.No.100 Finance (Pension-I) Department Dt.06.04.2010",
            "G.O.Ms.No.66 Finance (HRM.VI) Department Dt.12.06.2015",
            "G.O.Ms.No.51 Finance (HRM.VI) Department Dt.08.05.2015",
            "None of the above",
        ],
        answer: 2,
    },

    {
        id: 63,
        question:
            "PRAN in CPS stands for",
        options: [
            "Permanent Retirement Account Number",
            "Public receipt Account Number",
            "Provisional Receipt Account Number",
            "Personal Receipt Account Number",
        ],
        answer: 0,
    },

    {
        id: 64,
        question:
            "The Prescribed sales tax certificate should be recorded on the invoices bill under",
        options: [
            "TR 16 - SR 19(v)",
            "TR 16 - SR 2(s)",
            "TR 16 - SR (9)",
            "TR 16 - SR 2(h)",
        ],
        answer: 1,
    },

    {
        id: 65,
        question:
            "Mr. Kumar Babu (Govt. servant) expired while in service on 14.12.2011 and his date of birth is 10.06.1954. Find out upto what date the enhanced family pension is payable?",
        options: [
            "13.12.2018",
            "09.06.2019",
            "31.05.2019",
            "31.12.2018",
        ],
        answer: 0,
    },

    {
        id: 66,
        question:
            "A Government servant wishes to take retirement on completion of 33 years of qualifying service but before attaining 58 years of age shall give notice in writing to the appointing authority at least _____ months before the date he wishes to retire.",
        options: [
            "3 months",
            "6 months",
            "2 months",
            "1 month",
        ],
        answer: 0,
    },

    {
        id: 67,
        question:
            "The Government employee retired on superannuation. His qualifying service including weightage is 32 years 4 months. His last drawn basic pay Rs.53060. Calculate and find out service pension?",
        options: [
            "Rs.26,129/-",
            "Rs.26,125/-",
            "Rs.26,132/-",
            "None of the above",
        ],
        answer: 2,
    },

    {
        id: 68,
        question:
            "Under which Rule the case of serving employees/Pensioners whose whereabout not known is it be dealt with for sanction of family pension",
        options: [
            "U/R. 15",
            "U/R. 14-B",
            "U/R-14-C",
            "U/R-3 & 4 above",
        ],
        answer: 3,
    },

    {
        id: 69,
        question:
            "Which of the following is correct regarding the recent enhancement of EHS regarding Pensioner as per G.O.Ms.No.54, HM & FW (I.1) Department Dated: 06-05-2020",
        options: [
            "From 90/- to 180/- and 120/- to 240/-",
            "From 90/- to 225/- and 120/- to 300/-",
            "From 90/- to 200/- and 120/- to 300/-",
            "From 90/- to 150/- and 120/- to 300/-",
        ],
        answer: 3,
    },

    {
        id: 70,
        question:
            "Receipt Head of Account of APGLI?",
        options: [
            "8342-120-01",
            "8011-105-01",
            "8443-106-01",
            "8448-102-02",
        ],
        answer: 3,
    },

    {
        id: 71,
        question:
            "Deposit Accounts Under G.O.Ms.No.43 were classified into how many categories",
        options: [
            "4",
            "3",
            "5",
            "2",
        ],
        answer: 0,
    },

    {
        id: 72,
        question:
            "The Comptroller and Auditor General of India have the authority of audit the accounts of",
        options: [
            "Consolidated fund of India",
            "The accumulated fund of the state",
            "Each Union territory which have Legislative Assembly",
            "All of the above",
        ],
        answer: 2,
    },

    {
        id: 73,
        question:
            "The detailed head for Fees, Fines & Refunds is",
        options: [
            "330",
            "340",
            "350",
            "360",
        ],
        answer: 2,
    },

    {
        id: 74,
        question: "Choose the correct option",
        options: [
            "Both a and c",
            "Both a and b",
            "Both b and c",
            "All the above",
        ],
        answer: 3,
    },

    {
        id: 75,
        question:
            "Under detailed head 130-Office Expenses, the Sub Detailed head for drawl of Administrative expenses is",
        options: [
            "135",
            "136",
            "137",
            "138",
        ],
        answer: 2,
    },

    {
        id: 76,
        question:
            "Annual Valuation of Government promissory notes, etc defined under which Article?",
        options: [
            "Article 287",
            "Article 288",
            "Article 289",
            "Article 290",
        ],
        answer: 2,
    },

    {
        id: 77,
        question:
            "Government Accounts defined under which Rule of AP Treasury code",
        options: [
            "Treasury Rule 2",
            "Treasury Rule 18",
            "Treasury Rule 22",
            "Treasury Rule 32",
        ],
        answer: 0,
    },

    {
        id: 78,
        question:
            "Authority in which the anticipatory pension to the extent of 90% instead of 4/10th of last pay drawn emoluments, those who are retired on or after 01.02.2010",
        options: [
            "G.O.Ms.No.186 Finance (Pension. I) Department Dt. 24.05.2010",
            "G.O.Ms.No.598, GA (Spl.A) Department Dt.26.11.2009",
            "G.O.Ms.No.438, GA (Spl.A) Department Dt.07.07.2008",
            "None of the above",
        ],
        answer: 1,
    },

    {
        id: 79,
        question:
            "The director of treasuries and accounts or an authorised officer shall satisfy himself by periodical examination at least once in _____months kept under the joint lock and key of treasury strong room",
        options: [
            "6 months",
            "2 years",
            "3 months",
            "One year",
        ],
        answer: 0,
    },

    {
        id: 80,
        question:
            "Under which article of the constitution the Governor 'Cause to place' Annual financial statement before legislature",
        options: [
            "Article 202",
            "Article 204",
            "Article 205",
            "Article 206",
        ],
        answer: 0,
    },
    {
        id: 81,
        question:
            "A Government employee retired from service on 31.03.2019 with qualifying service of 29 years -7 months -23 days without weightage of 5 years admissible. His pay as on retirement is Rs.73270/- Calculate normal family pension?",
        options: [
            "Rs.21981/-",
            "Rs.20981/-",
            "Rs.22981/-",
            "Rs.24981/-",
        ],
        answer: 2,
    },

    {
        id: 82,
        question:
            "The recovery from the contingent bills on account of pay/TA shall not be made under",
        options: [
            "TR 31 SR 2(a)",
            "TR 4 SR 4",
            "TR 16 - SR 19 (v)",
            "TR 16 - SR 19 (vi)",
        ],
        answer: 2,
    },

    {
        id: 83,
        question:
            "As per Budget Manual expenditure on maintenance and repair of Non-Residential buildings shall be classified under Minor Head?",
        options: [
            "Ordinary Repairs",
            "Office Expenses",
            "Special Repairs",
            "Public Works",
        ],
        answer: 0,
    },

    {
        id: 84,
        question:
            "To whom the comptroller and Auditor General of India submits his resignation letter?",
        options: [
            "Finance Minister",
            "Lok Sabha Speaker",
            "President of India",
            "Prime Minister",
        ],
        answer: 2,
    },

    {
        id: 85,
        question:
            "Issue of last Pay Certificate to a Government servant discussed in _________ of Treasury Rules",
        options: [
            "Treasury Rule 16",
            "Treasury Rule 22 Instruction (1)",
            "Treasury Rule 23 Instruction (1)",
            "Treasury Rule 23 Instruction (4)",
        ],
        answer: 2,
    },

    {
        id: 86,
        question:
            "Under APGLI scheme, what is the compulsory premium rate (in Rs.) for pay slab (in rupees) 14861-18030",
        options: [
            "250",
            "350",
            "450",
            "600",
        ],
        answer: 2,
    },

    {
        id: 87,
        question:
            "Minimum Provisional pension to be sanctioned shall not be less than _______% of the normal pension entitlement for a Govt. servant where departmental proceedings is pending.",
        options: [
            "50%",
            "75%",
            "85%",
            "90%",
        ],
        answer: 1,
    },

    {
        id: 88,
        question:
            "While working as Sr. Assistant, the Government servant expired on 31.03.2020, His wife requested for sanction of commutation as against the family pension of Rs.39540/-",
        options: [
            "Rs,9,41,198/-",
            "Rs,9,25,948/-",
            "Not admissible for sanction of commutation on Family pension",
            "None of the above",
        ],
        answer: 1,
    },

    {
        id: 89,
        question:
            "Employee Health scheme came into operational from",
        options: [
            "31st March, 2012",
            "4th April 2012",
            "14th November, 2014",
            "5th December 2013",
        ],
        answer: 2,
    },

    {
        id: 90,
        question:
            "Up to how many months the EOL on Private affairs can be counted for pension benefits?",
        options: [
            "24 months",
            "36 months",
            "48 months",
            "None of the above",
        ],
        answer: 0,
    },

    {
        id: 91,
        question:
            "The Treasury Rule in which instructions are issued with regard to forwarding of Specimen Signature of the drawing Officer to the Treasury?",
        options: [
            "Treasury Rule 10",
            "Treasury Rule 16",
            "Treasury Rule 23",
            "Treasury Rule 29",
        ],
        answer: 1,
    },

    {
        id: 92,
        question:
            "Group Insurance scheme came into existence from",
        options: [
            "01-11-1984",
            "03-10-1985",
            "01-12-1986",
            "04-01-1987",
        ],
        answer: 2,
    },

    {
        id: 93,
        question:
            "CFMS was developed by",
        options: [
            "PFRDA",
            "APCFSS",
            "APCYBER Treasury",
            "AP Fiber net",
        ],
        answer: 1,
    },

    {
        id: 94,
        question:
            "Which of the following first digit of a Major Head represent Revenue Receipts?",
        options: [
            "0 or 1",
            "2 or 3",
            "6 or 7",
            "8",
        ],
        answer: 2,
    },

    {
        id: 95,
        question:
            "while in service/duty contract or out sourcing employee has faced accidental death how much of Ex-gratia will be sanctioned to legal heirs",
        options: [
            "2 lakhs",
            "3 lakhs",
            "5 lakhs",
            "10 lakhs",
        ],
        answer: 2,
    },

    {
        id: 96,
        question:
            "APGLI scheme Insurable age is between?",
        options: [
            "18-52 years",
            "21-54 years",
            "21-53 years",
            "22-54 years",
        ],
        answer: 1,
    },

    {
        id: 97,
        question:
            "What is the maximum pay in revised pay scales 2015",
        options: [
            "1,20,950/-",
            "1,10,850/-",
            "1,10,950/-",
            "1,10,750/-",
        ],
        answer: 2,
    },

    {
        id: 98,
        question: "Choose the correct combination",
        options: [
            "a, b, d",
            "b, c, d",
            "a, c, d",
            "All the above",
        ],
        answer: 2,
    },

    {
        id: 99,
        question:
            "Which rule states that every Government servant should exercise the same vigilance in respect of expenditure incurred from public money?",
        options: [
            "Article 3",
            "Article 13",
            "Article 33",
            "Article 35",
        ],
        answer: 1,
    },

    {
        id: 100,
        question:
            "The Treasury shall be under the general control of the ___________.",
        options: [
            "Finance Secretary",
            "Director of Treasuries and Accounts",
            "Finance Minister",
            "Governor",
        ],
        answer: 3,
    },
]

export default function ExamPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [answers, setAnswers] = useState<(number | null)[]>(
        Array(questions.length).fill(null)
    )

    const [submitted, setSubmitted] = useState(false)

    const [timeLeft, setTimeLeft] = useState(7200)

    useEffect(() => {
        if (submitted) return

        if (timeLeft <= 0) {
            handleSubmit()
            return
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft, submitted])

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60

        return `${hrs.toString().padStart(2, "0")}:${mins
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    const handleOptionSelect = (optionIndex: number) => {
        const updatedAnswers = [...answers]
        updatedAnswers[currentQuestion] = optionIndex
        setAnswers(updatedAnswers)
    }

    const handleSubmit = () => {
        setSubmitted(true)
    }

    const score = answers.reduce<number>((total, answer, index) => {
        return answer === questions[index].answer ? total + 1 : total
    }, 0)

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl text-center">
                    <h1 className="text-4xl font-bold text-green-600 mb-6">
                        Exam Submitted
                    </h1>

                    <p className="text-2xl font-semibold mb-4">
                        Your Score: {score} / {questions.length}
                    </p>

                    <p className="text-gray-600 text-lg">
                        Thank you for attending the examination.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

                    <div className="bg-red-600 text-white px-6 py-2 rounded-xl text-xl font-bold">
                        {formatTime(timeLeft)}
                    </div>
                </div>
            </div>

            {/* Main */}
            <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Question */}
                <div className="lg:col-span-3 bg-white rounded-2xl shadow p-6">
                    <h2 className="text-2xl font-bold mb-6">
                        Question {currentQuestion + 1}
                    </h2>

                    <p className="text-lg font-medium mb-8">
                        {questions[currentQuestion].question}
                    </p>

                    <div className="space-y-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionSelect(index)}
                                className={`w-full text-left border-2 rounded-xl p-4 transition-all ${answers[currentQuestion] === index
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-300 hover:border-blue-400"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-between mt-10">
                        <button
                            disabled={currentQuestion === 0}
                            onClick={() => setCurrentQuestion((prev) => prev - 1)}
                            className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                        >
                            Previous
                        </button>

                        {currentQuestion < questions.length - 1 ? (
                            <button
                                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-24">
                    <h3 className="text-xl font-bold mb-6">Question Palette</h3>

                    <div className="grid grid-cols-5 gap-3">
                        {questions.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentQuestion(index)}
                                className={`w-12 h-12 rounded-lg font-bold ${answers[index] !== null
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-200"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full mt-8 bg-red-600 text-white py-3 rounded-lg"
                    >
                        Submit Exam
                    </button>
                </div>
            </div>
        </div>
    )
}