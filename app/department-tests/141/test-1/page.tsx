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
            "A Government Servant expired while in service after rendering (28) years of qualifying service. For calculation of Death-cum-Retirement Gratuity, how many years of weightage shall be added to the qualifying service?",
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
            "Take effect from the date of issue of dispatch, letter or telegram containing the orders",
            "No option is correct",
            "Date of presenting bill in the Parliament",
        ],
        answer: 1,
    },

    {
        id: 9,
        question:
            "The excess of receipts over expenditure in the three accounts of the state viz. Consolidated Fund, Contingency Fund and the Public Account taken together is known as ________?",
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
            "A Government servant who is declared by the appropriate medical authority to be permanently incapacitated for further service may be granted ___________.",
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
            "What is the procedure to remove the Comptroller and Auditor-General from office?",
        options: [
            "Like manner and on the like ground as a Judge of the Supreme Court",
            "Like manner and on the like ground as a Judge of the High Court",
            "Like manner and on the like ground as Speaker of Lok Sabha",
            "No option is correct",
        ],
        answer: 0,
    },

    {
        id: 21,
        question:
            "Where a Government servant completes ______ or __________ before the date of retirement, the Head of Office shall send the service particulars to the Accountant General.",
        options: [
            "(20) years of service, left with (5) years",
            "(25) years of service, left with (5) years",
            "(20) years of service, left with (3) years",
            "(25) years of service, left with (3) years",
        ],
        answer: 0,
    },

    {
        id: 22,
        question:
            "The age of service pensioner has crossed 81 years. How much percentage of Additional quantum of pension is allowed?",
        options: [
            "50 percent of basic pension",
            "30 percent of basic pension",
            "15 percent of basic pension",
            "40 percent of basic pension",
        ],
        answer: 0,
    },

    {
        id: 23,
        question:
            "Which of the following source from which accounts along with supporting documents flow to the Accountant General?",
        options: [
            "All options are correct",
            "Inter-State Suspense Accounts",
            "District Treasuries and PAOs",
            "Public Works Divisions",
        ],
        answer: 0,
    },

    {
        id: 24,
        question:
            "Benefit of commutation of pension without medical examination is extended in which case?",
        options: [
            "Retirement Pension",
            "All options are correct",
            "Voluntary Retirement after 20 years",
            "Compensation Pension",
        ],
        answer: 0,
    },

    {
        id: 25,
        question:
            "A Government Servant expired leaving two legally wedded wives. Who is entitled to receive family pension?",
        options: [
            "No option is correct",
            "Both wives equal shares",
            "Second wife 50 percent",
            "First wife full family pension",
        ],
        answer: 0,
    },

    {
        id: 26,
        question:
            "Which of the following statement is correct regarding Government audit?",
        options: [
            "No option is correct",
            "First principle is distinction between audit and administration",
            "Both statements are correct",
            "Object of audit is value for taxpayers money",
        ],
        answer: 0,
    },

    {
        id: 27,
        question:
            "The chief purpose of tax is _______.",
        options: [
            "To give privilege to taxpayers",
            "To raise funds for Government",
            "No option is correct",
            "To reduce poverty",
        ],
        answer: 0,
    },

    {
        id: 28,
        question:
            "A copy of every order sanctioning expenditure should be communicated to ______.",
        options: [
            "Accountant General / PAO Hyderabad",
            "Government",
            "No option is correct",
            "Head of Department",
        ],
        answer: 0,
    },

    {
        id: 29,
        question:
            "Who is competent to sanction tour advance to Non-Gazetted Officers?",
        options: [
            "Government",
            "Tour advance cannot be sanctioned",
            "Head of Office",
            "Head of Department",
        ],
        answer: 1,
    },

    {
        id: 30,
        question:
            "Which of the following statement is true regarding T.A claims?",
        options: [
            "All options are correct",
            "Arrear claim should be supported by indemnity bond",
            "No claim for arrears of T.A after revised scale fixation",
            "T.A claims beyond 3 years should not be admitted",
        ],
        answer: 0,
    },

    {
        id: 31,
        question:
            "How much percent of surcharge collected on certain duties and taxes by Government of India shall form part of Consolidated Fund of India?",
        options: [
            "33 percent",
            "50 percent",
            "100 percent",
            "25 percent",
        ],
        answer: 1,
    },

    {
        id: 32,
        question:
            "Which of the following is the sub-division under Fiscal Services?",
        options: [
            "Other Fiscal Services",
            "All options are correct",
            "Collection of Taxes on Property",
            "Collection of Taxes on Commodities",
        ],
        answer: 0,
    },

    {
        id: 33,
        question:
            "Which particulars shall contain a bill presented at treasury as claim for payment?",
        options: [
            "All options are correct",
            "Period for which claim relates",
            "Head of account",
            "Nature of claim and amount",
        ],
        answer: 0,
    },

    {
        id: 34,
        question:
            "How many times Physical verification of stores shall be done at least in a year?",
        options: [
            "Thrice",
            "No option is correct",
            "Once",
            "Twice",
        ],
        answer: 0,
    },

    {
        id: 35,
        question:
            "Minor Work means work estimated cost of which does not exceed _______.",
        options: [
            "Rs. 3,00,000/-",
            "Rs. 2,00,000/-",
            "Rs. 5,00,000/-",
            "Rs. 1,00,000/-",
        ],
        answer: 0,
    },

    {
        id: 36,
        question:
            "The Telangana Contingency Fund is intended to provide advances for meeting _______.",
        options: [
            "Day to day expenditure",
            "Assembly Session expenditure",
            "Unforeseen expenditure",
            "No option is correct",
        ],
        answer: 0,
    },

    {
        id: 37,
        question:
            "When shall E.O.L period for undertaking job abroad count as qualifying service?",
        options: [
            "If contribution is paid by foreign employer",
            "If contribution paid by employer or employee",
            "No option is correct",
            "If contribution paid by employee",
        ],
        answer: 0,
    },

    {
        id: 38,
        question:
            "In which form can security be taken from Government servant or contractor?",
        options: [
            "Post Office Savings Bank Deposits",
            "Promissory notes",
            "Any option is correct",
            "Stock certificates",
        ],
        answer: 0,
    },

    {
        id: 39,
        question:
            "What is the Standard code of Sub-head to denote Lump sum Provision?",
        options: [
            "76",
            "75",
            "74",
            "73",
        ],
        answer: 0,
    },

    {
        id: 40,
        question:
            "Which Article of Financial Code states that every Government servant should attend audit objections without delay?",
        options: [
            "Article 19",
            "Article 59",
            "Article 159",
            "Article 259",
        ],
        answer: 1,
    },
    {
        id: 41,
        question:
            "Who is the competent authority to remove a civil servant in the Government?",
        options: [
            "Appointing authority",
            "Both appointing authority and higher authority",
            "Authority higher than appointing one",
            "No option is correct",
        ],
        answer: 0,
    },

    {
        id: 42,
        question:
            "Net proceeds in relation to any tax or duty means the proceeds thereof _________ by the cost of collection?",
        options: [
            "Reduced",
            "No option is correct",
            "Both Reduced and Increased",
            "Increased",
        ],
        answer: 0,
    },

    {
        id: 43,
        question:
            "In which of the following methods when works are executed?",
        options: [
            "All options are correct",
            "Schedule contract method",
            "Lump-sum contract method",
            "Departmental or piece-work contract method",
        ],
        answer: 0,
    },

    {
        id: 44,
        question:
            "No money shall be withdrawn from the Consolidated Fund of the State except under appropriation made by law passed in accordance with provisions of which Articles?",
        options: [
            "210 and 211",
            "212 and 213",
            "205 and 206",
            "207 and 209",
        ],
        answer: 3,
    },

    {
        id: 45,
        question:
            "Which of the following expenditure is charged on the Consolidated Fund of the State?",
        options: [
            "Salaries and allowances of High Court Judges",
            "Salaries of Speaker and Deputy Speaker",
            "Governor emoluments and office expenditure",
            "All options are correct",
        ],
        answer: 0,
    },

    {
        id: 46,
        question:
            "The salaries and allowances of the Chairman and Deputy Chairman of Legislative Council shall be _______.",
        options: [
            "Charged on Contingency Fund",
            "Charged on Consolidated Fund",
            "Voted on Contingency Fund",
            "Voted on Consolidated Fund",
        ],
        answer: 0,
    },

    {
        id: 47,
        question:
            "In which Treasury Rule permits that pension payable in India may be paid in any district of the state?",
        options: [
            "T.R. 12",
            "T.R. 22",
            "T.R. 27",
            "T.R. 21",
        ],
        answer: 0,
    },

    {
        id: 48,
        question:
            "A Government servant expired while in service leaving Daughter aged 24 years, Daughter aged 22 years and Son aged 19 years. Who is entitled for family pension first?",
        options: [
            "No one is eligible",
            "Daughter aged 24 years",
            "Son aged 19 years",
            "Daughter aged 22 years",
        ],
        answer: 1,
    },

    {
        id: 49,
        question:
            "Expenditure on payments made in satisfaction of any judgement, decree or award of Court is called _________?",
        options: [
            "Decretal amount",
            "Debenture",
            "Demand for grant",
            "Deposit",
        ],
        answer: 0,
    },

    {
        id: 50,
        question:
            "Who is the competent authority to relax Treasury Code rules?",
        options: [
            "Head of Department",
            "District Collector",
            "Government",
            "Governor",
        ],
        answer: 1,
    },

    {
        id: 51,
        question:
            "Treasury Officer is authorized to pass pay bills for temporary establishments continued beyond sanction up to?",
        options: [
            "two months",
            "three months",
            "one year",
            "six months",
        ],
        answer: 0,
    },

    {
        id: 52,
        question:
            "Which type of tender system shall be adopted if total order value does not exceed Rs.20,000/-?",
        options: [
            "Limited Tender",
            "Single Tender",
            "No option is correct",
            "Open Tender",
        ],
        answer: 0,
    },

    {
        id: 53,
        question:
            "Under which Article does Legislative Assembly have power to make grant in advance for expenditure?",
        options: [
            "207",
            "208",
            "206",
            "209",
        ],
        answer: 0,
    },

    {
        id: 54,
        question:
            "A Government servant expired after 6 years of service. Last drawn pay Rs.1,62,070/-. Family pension amount?",
        options: [
            "Rs. 48,621/-",
            "Rs. 81,035/-",
            "No option is correct",
            "Rs. 64,828/-",
        ],
        answer: 0,
    },

    {
        id: 55,
        question:
            "The Contingency Fund of the State is in the nature of an ______.",
        options: [
            "Bill",
            "No option is correct",
            "Voucher",
            "Imprest",
        ],
        answer: 0,
    },

    {
        id: 56,
        question:
            "In which T.S.T.C. Form shall anticipatory pension be claimed?",
        options: [
            "T.S.T.C. Form 40",
            "T.S.T.C. Form 47",
            "T.S.T.C. Form 76",
            "T.S.T.C. Form 75",
        ],
        answer: 0,
    },

    {
        id: 57,
        question:
            "A denovo examination of expenditure incurred by a department is known as ________.",
        options: [
            "No option is correct",
            "Plan",
            "Zero based budgeting",
            "Number Statements",
        ],
        answer: 0,
    },

    {
        id: 58,
        question:
            "Who lays Annual Financial Statement before the Legislature of the State?",
        options: [
            "Speaker of Assembly",
            "Governor",
            "Opposition Leader",
            "Chief Minister",
        ],
        answer: 0,
    },

    {
        id: 59,
        question:
            "How shall the period of overstayed service of Class IV employee beyond superannuation be treated?",
        options: [
            "Regularized as fresh appointment",
            "No option is correct",
            "Regularized as re-employment",
            "Ignored",
        ],
        answer: 0,
    },

    {
        id: 60,
        question:
            "Principles of Financial propriety are laid down in which Article of Financial Code Volume I?",
        options: [
            "3",
            "13",
            "330",
            "33",
        ],
        answer: 0,
    },
    {
        id: 61,
        question:
            "In which article of Indian Constitution it is stated that no tax shall be levied or collected except by authority of law?",
        options: [
            "275",
            "235",
            "265",
            "295",
        ],
        answer: 2,
    },

    {
        id: 62,
        question:
            "Important provisions in Telangana Civil Pensions (Commutation Rules, 1944) are laid down in ______.",
        options: [
            "No option is correct",
            "Rule 45 of T.S.R.P.R.1980",
            "Appendix-IV of T.S.R.P.R.1980",
            "Article 441 of Telangana Pension Code",
        ],
        answer: 0,
    },

    {
        id: 63,
        question:
            "Every departmental authority should verify all securities periodically and at least _______.",
        options: [
            "thrice in a year",
            "every month",
            "twice in a year",
            "once in a year",
        ],
        answer: 0,
    },

    {
        id: 64,
        question:
            "Resignation from a service or post entails ______.",
        options: [
            "forfeiture of future service",
            "No option is correct",
            "forfeiture of past and future service",
            "forfeiture of past service",
        ],
        answer: 0,
    },

    {
        id: 65,
        question:
            "Where a pensioner is drawing both family pension and service pension, Dearness Relief shall be entitled on ________.",
        options: [
            "No option is correct",
            "Only one pension whichever is beneficial",
            "On two pensions",
            "Only one pension whichever is less",
        ],
        answer: 0,
    },

    {
        id: 66,
        question:
            "In which T.S.T.C. Form shall the challan be prepared?",
        options: [
            "T.S.T.C. Form 3",
            "T.S.T.C. Form 4",
            "T.S.T.C. Form 10",
            "No option is correct",
        ],
        answer: 0,
    },

    {
        id: 67,
        question:
            "In how many years shall vouchers pertaining to Land Acquisition be preserved?",
        options: [
            "Preserved permanently",
            "Twenty years",
            "Ten years",
            "One year",
        ],
        answer: 0,
    },

    {
        id: 68,
        question:
            "Claims pertaining to payments towards bus warrants shall be drawn in which bill form?",
        options: [
            "T.S.T.C. Form No. 52",
            "No option is correct",
            "T.S.T.C. Form No. 47",
            "T.S.T.C. Form No. 58",
        ],
        answer: 0,
    },

    {
        id: 69,
        question:
            "Receipt Major Head of Road Transport Department is 1055. What is the Major Head of Expenditure?",
        options: [
            "3055",
            "4055",
            "5055",
            "2055",
        ],
        answer: 0,
    },

    {
        id: 70,
        question:
            "In P.R.C. 2020 the limit of Retirement Gratuity Rs.12,00,000/- has been raised to Rs. ________.",
        options: [
            "Rs. 14,00,000/-",
            "Rs. 20,00,000/-",
            "Rs. 16,00,000/-",
            "Rs. 15,00,000/-",
        ],
        answer: 0,
    },

    {
        id: 71,
        question:
            "In which Article of Financial Code are General Principles for enforcing responsibility for losses laid down?",
        options: [
            "297",
            "300",
            "298",
            "299",
        ],
        answer: 1,
    },

    {
        id: 72,
        question:
            "_______ may, in urgency, authorize and require a Treasury Officer to make payment?",
        options: [
            "A Gazetted Officer",
            "No option is correct",
            "A Drawing and Disbursing Officer",
            "A Collector",
        ],
        answer: 2,
    },

    {
        id: 73,
        question:
            "A Government Servant retired on attaining age of 61 years. What commutation value expressed as number of years purchase shall be taken?",
        options: [
            "8.371",
            "7.982",
            "No option is correct",
            "8.093",
        ],
        answer: 0,
    },

    {
        id: 74,
        question:
            "Taxes levied and collected by the Union and assigned to the States are _____?",
        options: [
            "Duties in respect of succession to property other than agricultural land",
            "All options are correct",
            "Estate duty in respect of property other than agricultural land",
            "Taxes on railway fares and freights",
        ],
        answer: 0,
    },

    {
        id: 75,
        question:
            "In which of the following amounts no recoveries can be made?",
        options: [
            "Family Benefit Fund",
            "All options are correct",
            "Telangana Group Insurance Scheme",
            "General Provident Fund and TSGLI",
        ],
        answer: 0,
    },

    {
        id: 76,
        question:
            "Article _______ of Constitution provides that Comptroller and Auditor-General shall be appointed by the President.",
        options: [
            "150",
            "148",
            "149",
            "143",
        ],
        answer: 1,
    },

    {
        id: 77,
        question:
            "Ways and Means wing of Finance Department keeps watch over the ______ cash balance of the State with RBI.",
        options: [
            "Yearly",
            "Quarterly",
            "Monthly",
            "Daily",
        ],
        answer: 0,
    },

    {
        id: 78,
        question:
            "_______ system should ordinarily be adopted whenever estimated value of order is less than Rs.5,00,000/-",
        options: [
            "Open Tender",
            "No option is correct",
            "Limited Tender",
            "Single Tender",
        ],
        answer: 0,
    },

    {
        id: 79,
        question:
            "Government property or right is sold by ________?",
        options: [
            "Both public auction and tender",
            "Public auction",
            "Tender",
            "No option is correct",
        ],
        answer: 0,
    },

    {
        id: 80,
        question:
            "Which of the following statement is true regarding Retirement Gratuity?",
        options: [
            "No option is correct",
            "Retirement Gratuity is not admissible to second wife without approval",
            "Both statements are true",
            "Relinquishment of share is not permissible",
        ],
        answer: 0,
    },
    {
        id: 81,
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

    {
        id: 82,
        question:
            "Validity of sanction order of a provident fund advance is?",
        options: [
            "Six months",
            "One-month",
            "Three months",
            "One year",
        ],
        answer: 0,
    },

    {
        id: 83,
        question:
            "In the Classification of the Accounts ‘detailed head of account’ indicate __________?",
        options: [
            "The nature or form of expenditure",
            "The scheme or organization",
            "The function of Government",
            "Grouping of functions",
        ],
        answer: 0,
    },

    {
        id: 84,
        question:
            "In Indian Government Accounts and Audit, Three 'E's indicate?",
        options: [
            "Everything, Efficiency and Effectiveness",
            "Economy, Efficiency and Effectiveness",
            "Economy, Emergency and Effectiveness",
            "Economy, Efficiency and Early",
        ],
        answer: 0,
    },

    {
        id: 85,
        question:
            "Which allowances have been exempted from attachment by order of a Court?",
        options: [
            "All kinds of travelling allowances",
            "All house-rent allowances",
            "All conveyance allowances",
            "All options are correct",
        ],
        answer: 0,
    },

    {
        id: 86,
        question:
            "All appropriations lapse at the close of the ______.",
        options: [
            "No option is correct",
            "Academic year",
            "Calendar year",
            "Financial year",
        ],
        answer: 0,
    },

    {
        id: 87,
        question:
            "A Government Servant expired without nomination leaving widow daughter, father and mother. To whom is DCRG payable?",
        options: [
            "Equal shares to all",
            "Mother",
            "Widow daughter",
            "Father",
        ],
        answer: 2,
    },

    {
        id: 88,
        question:
            "Under which Article of Constitution no civil servant shall be dismissed without enquiry and reasonable opportunity?",
        options: [
            "312(2)",
            "314(4)",
            "311(2)",
            "313(3)",
        ],
        answer: 2,
    },

    {
        id: 89,
        question:
            "How many digit code number is assigned to Sub-major Head?",
        options: [
            "Four digit",
            "Three digit",
            "Two digit",
            "Seven digit",
        ],
        answer: 0,
    },

    {
        id: 90,
        question:
            "The amount available for day-to-day expenses of running the business is known as ______?",
        options: [
            "No option is correct",
            "Working Capital",
            "Running Capital",
            "Paid up Capital",
        ],
        answer: 0,
    },

    {
        id: 91,
        question:
            "Which of the following statement is true regarding fees?",
        options: [
            "All options are correct",
            "Fees are paid for privilege",
            "Payment of fee is voluntary",
            "Fee may be charged for services rendered",
        ],
        answer: 3,
    },

    {
        id: 92,
        question:
            "Transactions between Governments or departments shall be rounded to the ______.",
        options: [
            "nearest rupee",
            "No option is correct",
            "next rupee",
            "multiple of 10",
        ],
        answer: 0,
    },

    {
        id: 93,
        question:
            "A Government Servant joined pensionable service on 12th March 2002 and expired on 21st June 2002. How much family pension shall be allowed?",
        options: [
            "Rs.330/- p.m. w.e.f. 22nd June 2002",
            "Rs.330/- p.m. w.e.f. 21st June 2002",
            "No family pension",
            "Rs.550/- p.m. w.e.f. 22nd June 2002",
        ],
        answer: 0,
    },

    {
        id: 94,
        question:
            "Which item shall be reckoned towards emoluments for calculation of pension?",
        options: [
            "Stagnation increments",
            "Personal pay",
            "All options are correct",
            "Notional pay",
        ],
        answer: 0,
    },

    {
        id: 95,
        question:
            "Register of Bills shall be maintained in which T.S.T.C Form?",
        options: [
            "T.S.T.C Form No.70-D",
            "T.S.T.C Form No.70-C",
            "T.S.T.C Form No.70-A",
            "T.S.T.C Form No.70-B",
        ],
        answer: 0,
    },

    {
        id: 96,
        question:
            "The Accounts Officer for Army Administrative and Accounts unit is called ______.",
        options: [
            "Controller of Examination",
            "Controller of Defense Accounts",
            "Chief Controller",
            "No option is correct",
        ],
        answer: 0,
    },

    {
        id: 97,
        question:
            "If a Pensioner completes age of 70 years in August 2021, additional pension is admissible from ______.",
        options: [
            "1st August 2021",
            "1st September 2021",
            "1st September 2022",
            "1st August 2022",
        ],
        answer: 0,
    },

    {
        id: 98,
        question:
            "Any person serving in connection with affairs of the State and handling Government money is called ______?",
        options: [
            "Accountant General",
            "Government Servant",
            "No option is correct",
            "Collector",
        ],
        answer: 0,
    },

    {
        id: 99,
        question:
            "A Government Servant drawing Basic Pay Rs.52,720 with DA and HRA retired after 25 years service. How much DCRG is admissible?",
        options: [
            "Rs. 12,80,505/-",
            "Rs. 9,08,925/-",
            "Rs. 10,90,710/-",
            "Rs. 16,00,000/-",
        ],
        answer: 0,
    },

    {
        id: 100,
        question:
            "In which Form shall the Pay Bill Register be maintained in district offices in Telangana State?",
        options: [
            "T.S.T.C. Form 109",
            "No option is correct",
            "T.S.T.C. Form 108",
            "T.S.T.C. Form 107",
        ],
        answer: 0,
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
                    <h1 className="text-2xl font-bold text-blue-600">
                        Telangana Departmental Test
                    </h1>

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