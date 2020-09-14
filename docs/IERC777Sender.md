# [🔗](/interfaces/IERC777Sender.sol#L7) IERC777Sender
**Author** _Andrea Di Nenno_

This interface allows a token sender (EOA or Smart Contract) to add extra logic to control his outgoing tokens.


# Functions
## [🔗](/interfaces/IERC777Sender.sol#L15) `tokensToSend(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)`

Called by a `ERC777` token contract before tokens are being transferred or burned.

This call occurs before the contract state (i.e. balances) is updated and may revert to prevent transfer.

It is OPTIONAL both for a Smart Contract and a EOA to implement this interface.




### Parameters
* `operator` address of the operator, if any, that triggered the transfer
* `from` address of the token sender
* `to` address of the token receiver
* `amount` amount of tokens being sent
* `userData` extra information provided by the sender
* `operatorData` extra information provided by the operator, if present

