cube(`Interndata`, {
  sql: `SELECT * FROM interndb.interndata`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [country, title]
    }
  },
  
  dimensions: {
    added: {
      sql: `added`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    endYear: {
      sql: `end_year`,
      type: `string`
    },
    
    impact: {
      sql: `impact`,
      type: `string`
    },
    
    insight: {
      sql: `insight`,
      type: `string`
    },
    
    intensity: {
      sql: `intensity`,
      type: `string`
    },
    
    likelihood: {
      sql: `likelihood`,
      type: `string`
    },
    
    pestle: {
      sql: `pestle`,
      type: `string`
    },
    
    published: {
      sql: `published`,
      type: `string`
    },
    
    region: {
      sql: `region`,
      type: `string`
    },
    
    relevance: {
      sql: `relevance`,
      type: `string`
    },
    
    sector: {
      sql: `sector`,
      type: `string`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    startYear: {
      sql: `start_year`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    topic: {
      sql: `topic`,
      type: `string`
    },
    
    url: {
      sql: `url`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
