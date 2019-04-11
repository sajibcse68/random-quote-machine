import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent>
      <Typography id="text">
        {selectedQuote.quote}- <span id="author">{selectedQuote.author}</span>
      </Typography>
    </CardContent>

    <CardActions>
      <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>Next Quote</Button>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`}
      >
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
)

export default QuoteMachine;