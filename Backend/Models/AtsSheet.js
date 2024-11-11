const mongoose = require('mongoose');

const atsSchema = new mongoose.Schema({
    // General Information
    employeeName: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    source: { type: String, required: true },
    sourceDetail: { type: String, required: true },
    cvReceivedDate: { type: Date, required: true },
    qualification: { type: String, required: true },
    experienceYears: { type: Number, required: true },
    workArea: { type: String, required: true },
    currentCompany: { type: String, required: true },
    mobileNo: { type: String, required: true },
    alternativeContactInfo: { type: String, required: true },
    emailId: { type: String, required: true },
    shortlisted: { type: Boolean, required: true },

    // Screening Information
    screeningDoneBy: { type: String, required: true },
    remarksForShortlisting: { type: String, required: true },

    // Compensation Information
    ctc: { type: String, required: true }, // CTC(Fixed + Variable)
    ectc: { type: String, required: true },
    remarksOnCtcEctc: { type: String, required: true },
    noticePeriodOfficial: { type: String, required: true },
    remarksOnNp: { type: String, required: true },

    // Interview Details
    interviewDate: { type: Date, required: true },
    interviewTime: { type: String, required: true },
    interviewTeamsOrOffice: { type: String, required: true },
    remarksTeamsInterview: { type: String, required: true },
    invitesSent: { type: Boolean, required: true },

    // HR Round Details
    hrRoundTakenBy: { type: String, required: true },
    interviewOutcomeHrRound: { type: String, required: true },
    interviewHrDate: { type: Date, required: true },
    remarksHrRoundOutcome: { type: String, required: true },

    // Technical Round 1 Details
    technical1RoundTakenBy: { type: String, required: true },
    technical1InterviewDate: { type: Date, required: true },
    interviewOutcomeTechnical1Round: { type: String, required: true },
    remarksTechnical1Round: { type: String, required: true },

    // Technical Round 2 Details
    technical2RoundTakenBy: { type: String, required: true },
    technical2InterviewDate: { type: Date, required: true },
    interviewOutcomeTechnical2Round: { type: String, required: true },
    remarksTechnical2Round: { type: String, required: true },

    // Meet and Greet Round Details
    meetAndGreetRoundPerson1: { type: String, required: true },
    meetAndGreetRoundPerson2: { type: String, required: true },
    interviewOutcomeMeetAndGreetRound: { type: String, required: true },
    meetAndGreetInterviewDate: { type: Date, required: true },
    remarksMeetAndGreetRound: { type: String, required: true },

    // Other Rounds (COP, CEO, etc.)
    copRoundOutcome: { type: String, required: true },
    remarksCopRound: { type: String, required: true },
    ceoRoundOutcome: { type: String, required: true },
    remarksCeoRound: { type: String, required: true },

    // Final Outcome
    finalOutcomeDate: { type: Date, required: true },
    finalOutcome: { type: String, required: true },

    // Offer and Joining Details
    positionGiven: { type: String, required: true },
    ctcOfferedLpa: { type: String, required: true },
    joiningBonusLpa: { type: String, required: true },
    bond: { type: Boolean, required: true },
    bondPeriod: { type: String, required: true },
    kycDocuments: { type: String, required: true },
    offerLetterShared: { type: Boolean, required: true },
    offerLetterAccepted: { type: Boolean, required: true },
    remarksOfferLetter: { type: String, required: true },
    previousExperienceDocuments: { type: String, required: true },
    joiningDate: { type: Date, required: true },
    extensionDate: { type: Date, required: true },
    remarks: { type: String, required: true }
});

module.exports = mongoose.model('AtsEntry', atsSchema);
