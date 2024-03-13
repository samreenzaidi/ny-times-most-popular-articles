import React from 'react';
import Article from '../components/Article';
import {screen, render} from '@testing-library/react';

describe('Article', () => {
    it('should render the view if article object is not empty', () => {
        const articles = {
            "uri": "nyt://article/3644707c-5c22-5812-9014-e49f9fb120a5",
            "url": "https://www.nytimes.com/2024/03/12/us/politics/hur-biden-memory-transcript.html",
            "id": 100000009356241,
            "asset_id": 100000009356241,
            "source": "New York Times",
            "published_date": "2024-03-12",
            "updated": "2024-03-12 23:25:28",
            "section": "U.S.",
            "subsection": "Politics",
            "nytdsection": "u.s.",
            "adx_keywords": "United States Politics and Government;Classified Information and State Secrets;Presidential Election of 2024;Special Prosecutors (Independent Counsel);Biden, Joseph R Jr;Hur, Robert Kyoung;Obama, Barack;Trump, Donald J;House Committee on the Judiciary;National Archives and Records Administration;Penn Biden Center for Diplomacy and Global Engagement",
            "column": null,
            "byline": "By Charlie Savage",
            "type": "Article",
            "title": "How the Special Counsel’s Portrayal of Biden’s Memory Compares With the Transcript",
            "abstract": "The special counsel, Robert K. Hur, accused the president last month of “significant” memory problems. The interview transcript offers context to his report.",
            "des_facet": [],
            "org_facet": [],
            "per_facet": [],
            "geo_facet": [],
            "media": [],
            "eta_id": 0
        }
        const { container } = render(<Article articles={articles}/>)
        expect(container).not.toBeNull();
    });
    it('should render the view if article object is empty', () => {
        const { container } = render(<Article articles={[]}/>)
        expect(container.firstChild).toBeNull();
    });
});

