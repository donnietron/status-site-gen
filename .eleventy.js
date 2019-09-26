

module.exports = function(eleventyConfig) {


    // split master slide into collection
    eleventyConfig.addCollection("flatStatuses", col => {
        let statuses = col.items[0].data.statuses
        let combinedStatuses = statuses.map(grp => {
            return grp.items.map(item => {
                return {
                    type: grp.type,
                    name: item.name,
                    desc: item.desc
                }
            })
        })
        let flatStatuses = [].concat(...combinedStatuses)
        return flatStatuses
    });
    
 
    return {
        dir: {
            layouts: "_layouts"
        }

    };
};

