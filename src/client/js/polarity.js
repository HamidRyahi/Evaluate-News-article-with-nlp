export function polarity(scoreTag) {
    switch (scoreTag) {
        case "P":
            scoreTag = "POSITIVE";
            break;
        case "P+":
            scoreTag = "STRONG POSITIVE";
            break;
        case "NEU":
            scoreTag = "NEUTRAL";
            break;
        case "N":
            scoreTag = "NEGATIVE";
            break;
        case "N+":
            scoreTag = "STRONG NEGATIVE";
            break;
        case "NONE":
            scoreTag = "WITHOUT SENTIMENT";
            break;
    }
    return scoreTag;
}
