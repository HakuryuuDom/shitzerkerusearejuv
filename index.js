module.exports = function unlein(d) {
let enabled = true;
let rejuvId = 149644
d.command.add('shitzerker', () => {
enabled = !enabled
d.command.message(`unlein is now ${enabled ? 'enabled' : 'disabled'}.`)})
d.command.add('setpot', (chat) => {
var regexId = /#(\d*)@/;
var id = chat.match(regexId);
if (id){rejuvId = parseInt(id[1])}
d.command.message(`potion set to ` + rejuvId)})
d.hook('S_ABNORMALITY_BEGIN', 2, (event) => {
if(!enabled) return;
if(event.id === 401705 && d.game.me.is(event.target))
d.toServer('C_USE_ITEM', 3, {
gameId: d.game.me.gameId,
id: rejuvId,
amount: 1,
unk4: true
})
})
}