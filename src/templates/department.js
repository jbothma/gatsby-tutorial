import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  return (
        <div class="Page-content Page-content--dynamicYears">
          <div class="Page-contentInner Page-contentInner--department is-full">
            <>
            <nav class="SectionIndicator" data-sticky-arrows>
              <ul class="SectionIndicator-list nav">
                <>
                <li class="SectionIndicator-item nav-item">
                  <a href="#section-plan" data-scroll-smooth="#section-plan" class="SectionIndicator-circle SectionIndicator-circle--green nav-link">Plan link</a>
                </li>

                <li class="nav-item">
                    <a href="#section-implement" data-scroll-smooth="#section-implement" class="SectionIndicator-circle SectionIndicator-circle--orange nav-link">Implement link</a>
                  </li>

                <li class="nav-item">
                  <a href="#section-review" data-scroll-smooth="#section-review" class="SectionIndicator-circle SectionIndicator-circle--purple nav-link">Review Link</a>
                </li>
                </>
              </ul>
            </nav>

            <h1 class="Page-mainHeading u-textAlignCenter u-marginBottom0 u-marginLeft0">
              {frontmatter.name}
            </h1>
            <span class="Page-subHeading u-textAlignCenter">
              {/*department_location*/} Department Budget for {frontmatter.selected_financial_year}
            </span>
            {/* if frontmatter.website_url %}
            <span class="Page-subHeading-link u-textAlignCenter">
                <a href="http://{frontmatter.website_url}">{frontmatter.website_url}</a>
            </span>
            {% endif */}
            {/*<
              include components/department-budgets/IntroSection/index.html
              description=frontmatter.intro
              datasets=frontmatter.treasury_datasets
              location=department_location
            >*/}
            <div class="Page-subHeading u-marginTop15 u-supportsFlex u-textAlignCenter u-marginBottom25">
              The Budget Cycle
            </div>

            <div>
              {/*<
                include components/department-budgets/ArrowButtons/index.html
                link_1="#section-plan"
                link_2="#section-implement"
                link_3="#section-review"
              >*/}            </div>

            <div class="u-marginTop100">
              <div class="DeptSectionHead DeptSectionHead--green" id="section-plan">
                Plan
              </div>
            </div>

            <div class="u-marginTop25 u-marginBottom60">
              <>
              <h3 class="Title Title--section">{frontmatter.selected_financial_year} Budget</h3>
              <p>
                The {/*source_type_revenue*/} ({/*source_type_revenue_short*/}) is a book published along with the tabling of the budget for the new financial year.
              </p>
              </>
              {/* assign text1 = "View the " | append: source_type_revenue_short | append: " chapter for " | append: chapter_name | append: " (PDF)" */}
              {/* assign text2 = "View tables in the " | append: source_type_revenue_short | append: " chapter (Excel)" */}

              {/* if pdf_link or excel_link %}
                <ul class="LinksList">
                  <
                    include components/LinksList/item.html
                    text=text1
                    url=pdf_link
                    type="download"
                  >

                  <
                    include components/LinksList/item.html
                    text=text2
                    url=excel_link
                    type="download"
                  >
                </ul>
              {% endif */}
            </div>

            {/* if frontmatter.programmes %}
              <div class="u-marginBottom60">
                <
                  include scenes/department/ProgrammesSection/index.html
                  type="programmes"
                  items=frontmatter.programmes.programme_budgets

                  source_type=source_type
                  year=frontmatter.selected_financial_year
                  dataset=frontmatter.programmes.dataset_detail_page
                  pdf=pdf
                  excel=excel
                  title="Programme budgets"
                  subtitle=subtitle
                  csv=frontmatter.programmes.department_data_csv
                  guide=guide

                  description="Activities of this department"
                >
              </div>
            {% endif */}

            {/* if frontmatter.subprogramme_by_programme %}
              <div class="u-marginBottom60">
                <
                  include scenes/department/SmallMultiplesSection/index.html
                  id="subprogramme-by-programme"

                  title="Budgeted spending by sub-programme for each programme"
                  description="Each chart shows the budgeted spending by each sub-programme of that programme."
                  charts_list=frontmatter.subprogramme_by_programme.programmes

                  source_type=source_type
                  year=frontmatter.selected_financial_year
                  dataset=frontmatter.subprogramme_by_programme.dataset_detail_page
                  pdf=pdf
                  excel=excel
                  csv=frontmatter.subprogramme_by_programme.department_data_csv
                  guide=guide

                  subtitle=subtitle
                >
                </div>
            {% endif */}

            {/* if frontmatter.economic_classification_by_programme.programmes %}
              <div class="u-marginBottom60">
                <
                  include scenes/department/SmallMultiplesSection/index.html
                  id="economic-classification-by-programme"

                  title="Budgeted spending by Economic Classification for each programme"
                  description="Each chart shows the budgeted spending by economic classification under that Programme."
                  charts_list=frontmatter.economic_classification_by_programme.programmes

                  source_type=source_type
                  year=frontmatter.selected_financial_year
                  dataset=frontmatter.economic_classification_by_programme.dataset_detail_page
                  pdf=pdf
                  excel=excel
                  csv=frontmatter.economic_classification_by_programme.department_data_csv
                  guide=guide

                  subtitle=subtitle
                >
              </div>
            {% endif */}

            {/* if frontmatter.programme_by_economic_classification.econ_classes %}
              <div class="u-marginBottom60">
                <
                  include scenes/department/SmallMultiplesSection/index.html
                  id="programmes-by-economic-classification"

                  title="Budgeted spending by programme for Economic Classification items"
                  description="Each chart shows the budgeted spending of each Programme under that Economic Classification."
                  charts_list=frontmatter.programme_by_economic_classification.econ_classes

                  source_type=source_type
                  year=frontmatter.selected_financial_year
                  dataset=frontmatter.programme_by_economic_classification.dataset_detail_page
                  pdf=pdf
                  excel=excel
                  csv=frontmatter.programme_by_economic_classification.department_data_csv
                  guide=guide

                  subtitle=subtitle
                >
              </div>
              {% endif */}


            <h3 class="Title Title--section">{frontmatter.selected_financial_year} Adjusted Budget</h3>
            <p>
              The {/*source_type_adjusted*/} ({/*source_type_adjusted_short*/}) is a book published along with the tabling of the adjusted budget.
            </p>

            {/* assign text1 = "View the " | append: source_type_adjusted_short | append: " chapter for " | append: chapter_name | append: " (PDF)." */}
            {/* assign text2 = "View tables in the " | append:  source_type_adjusted_short | append: " chapter (Excel)." */}

            {/* if pdf_link_adjusted or excel_link_adjusted %}
              <ul class="LinksList u-marginBottom60">
                <
                  include components/LinksList/item.html
                  text=text1
                  url=pdf_link_adjusted
                  type="download"
                >

                <
                  include components/LinksList/item.html
                  text=text2
                  url=excel_link_adjusted
                  type="download"
                >
              </ul>
            {% endif */}

            {/* assign info2 = "The " | append:  source_type_revenue_short | append: " chapter for " | append:  chapter_name | append: " (PDF) is not available yet" */}
            {/* assign info3 = "The tables in " | append: source_type_revenue_short | append: " chapter (Excel)" */}

            {/* if pdf_link_adjusted == null and excel_link_adjusted == null %}
              <div class="Message Message--secondary u-marginBottom60 ">
                <div class="Message-content">
                  <
                    include_cached components/Icon/index.html
                    type="info"
                  >
                  <span class="Message-heading">
                    Please note
                  </span>
                </div>
                <div class="Message-text Message-text--secondary">The adjusted budget documents are not available yet on vulekamali.gov.za</div>
              </div>
            {% endif */}

            {/* if pdf_link_adjusted == null and excel_link_adjusted %}
              <div class="Message Message--secondary u-marginBottom60">
                <div class="Message-content">
                  <
                    include_cached components/Icon/index.html
                    type="info"
                  >
                  <span class="Message-heading">
                    Please note
                  </span>
                </div>
                <div class="Message-text Message-text--secondary">The {source_type_revenue_short} chapter for {chapter_name} (PDF) is not available yet</div>
              </div>
            {% endif */}

            {/* if excel_link_adjusted == null and pdf_link_adjusted  %}
              <div class="Message Message--secondary u-marginBottom60">
                <div class="Message-content">
                  <
                    include_cached components/Icon/index.html
                    type="info"
                  >
                  <span class="Message-heading">
                    Please note
                  </span>
                </div>
                <div class="Message-text Message-text--secondary">The tables in {source_type_revenue_short} chapter (Excel) is not available yet</div>
              </div>
            {% endif */}


            {/* if frontmatter.government.slug == 'south-africa' %}
              <div class="u-marginBottom60">
                <
                  include scenes/department/AdjustedSection/index.html

                  type="adjusted"
                  items=frontmatter.adjusted_budget_summary

                  source_type=source_type
                  source_type_adjusted=source_type_adjusted
                  year=frontmatter.selected_financial_year

                  pdf=pdf
                  excel=excel
                  pdf_adjusted=pdf_link_adjusted
                  excel_adjusted=excel_link_adjusted
                  csv=frontmatter.adjusted_budget_summary.department_data_csv
                  dataset=frontmatter.adjusted_budget_summary.dataset_detail_page

                  parliament=parliament
                  title="Programme budgets"
                  subtitle=subtitle
                  description="Activities of this department"
                >
              </div>
            {% endif */}


            <div class="u-marginTop100">
              <div class="DeptSectionHead DeptSectionHead--orange" id="section-implement">
                Implement
              </div>
            </div>


            <div class="Message Message--secondary u-marginBottom20 u-marginTop25">
              <div class="Message-content">
                {/*<
                  include_cached components/Icon/index.html
                  type="info"
                  size="l"
                >*/}                <span class="Message-heading">
                  Please note
                </span>
              </div>
              <div class="Message-text Message-text--secondary">Implementation data coming soon</div>
            </div>


            <div class="u-marginTop100">
              <div class="DeptSectionHead DeptSectionHead--purple" id="section-review">
                Review
              </div>
            </div>

            {/* if frontmatter.expenditure_over_time %}
              <div class="u-marginBottom60 u-marginTop15">
                <
                  include scenes/department/ExpenditureSection/index.html
                  items=frontmatter.expenditure_over_time.expenditure

                  cpi=site.data.global_values.cpi_dataset_url
                  source_type=source_type
                  year=frontmatter.selected_financial_year
                  dataset=frontmatter.expenditure_over_time.dataset_detail_page
                  pdf=pdf_link
                  excel=excel
                  csv=frontmatter.expenditure_over_time.department_data_csv
                  guide=guide

                  color="purple"
                  title="Planned compared to historical expenditure"
                  subtitle=subtitle
                  description="Expenditure changes over time"
                >
              </div>
            {% endif */}

            {/* capture review_subtitle %}{department_location} {frontmatter.item_name} Department{% endcapture */}

            {/* if frontmatter.budget_actual %}
              <div class="u-marginBottom60 u-marginTop15">
                <
                  include scenes/department/ExpenditurePhaseSection/index.html
                  items=frontmatter.budget_actual.expenditure

                  cpi=site.data.global_values.cpi_dataset_url
                  source_type="Expenditure Time Series"
                  year=frontmatter.selected_financial_year

                  dataset=frontmatter.budget_actual.dataset_detail_page
                  csv=frontmatter.budget_actual.department_data_csv

                  color="purple"
                  description="Budgeted and Actual Expenditure comparison"
                  subtitle=review_subtitle
                  notices=frontmatter.budget_actual.notices
                  website_url=frontmatter.website_url
                >
              </div>
            {% endif */}

            {/* if frontmatter.budget_actual_programmes %}
              <div class="u-marginBottom60 u-marginTop15">
                <
                  include scenes/department/ExpenditureMultiplesSection/index.html
                  items=frontmatter.budget_actual_programmes.programmes

                  cpi=site.data.global_values.cpi_dataset_url
                  source_type="Expenditure Time Series"
                  year=frontmatter.selected_financial_year

                  dataset=frontmatter.budget_actual_programmes.dataset_detail_page
                  csv=frontmatter.budget_actual_programmes.department_data_csv

                  color="purple"
                  subtitle=review_subtitle
                  description="Budgeted and Actual Expenditure comparison by Programme"
                  notices=frontmatter.budget_actual_programmes.notices
                >
              </div>
            {% endif */}

            <div class="u-marginTop20">
              <div class="Grid has-leftSidebar">
                <div>
                  {/*<
                    include components/department-budgets/ContributedData/index.html
                    datasets=frontmatter.contributed_datasets
                  >*/}                </div>

                <div>
                  {/*<
                    include components/universal/Participate/index.html
                    title="Timelines for this department and ways to participate"
                    description="National Treasury, departments and commitees are busy with different things depending on the time of year:"
                  >*/}
                  <div class="Section u-marginTop20">
                    <>
                    <h2 class="Title Title--section">Discuss this budget with others</h2>
                    <div data-enhance-component="Comments" data-url="https://vulekamali.gov.za{frontmatter.url}">
                      <div id="discourse-comments"></div>
                    </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
            </>
          </div>
        </div>
  )
}

export const pageQuery = graphql`
  query($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      frontmatter {
        name
        selected_financial_year
      }
    }
  }
`
