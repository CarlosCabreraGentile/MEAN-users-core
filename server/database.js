// Define all database
const database = {
    local: 'mongodb://localhost/mean-users',
}

// Check parameters to define the database to export
var _database = database.local;

module.exports = {
    'secret': 'justAnAwesomeSecret',
    'database': _database
}