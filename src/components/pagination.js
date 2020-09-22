


import React, { Component } from 'react'
import { Grid, Form, Pagination, Segment } from 'semantic-ui-react'

export default class PaginationExampleCustomization extends Component {
    state = {
        activePage: 5,
        boundaryRange: 1,
        siblingRange: 1,
        showEllipsis: true,
        showFirstAndLastNav: true,
        showPreviousAndNextNav: true,
        totalPages: 50,
    }

    handleCheckboxChange = (e, { checked, name }) =>
        this.setState({ [name]: checked })

    handleInputChange = (e, { name, value }) => this.setState({ [name]: value })

    handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

    render() {
        const {
            activePage,
            boundaryRange,
            siblingRange,
            showEllipsis,
         
           
            totalPages,
        } = this.state

        return (
            <Grid columns={1}>
                <Grid.Column>
                    <Pagination
                        activePage={activePage}
                        boundaryRange={boundaryRange}
                        onPageChange={this.handlePaginationChange}
                        size='mini'
                        siblingRange={siblingRange}
                        totalPages={totalPages}
                        ellipsisItem={showEllipsis ? undefined : null}
                        firstItem={null}
                        lastItem={null}
                    />
                </Grid.Column>

                <Grid.Column>
                    <Form as={Segment}>
                        <Form.Group widths={2}>
                            <Form.Input
                                label='برو به صفحه'
                                name='activePage'
                                min={1}
                                onChange={this.handleInputChange}
                              
                                value={activePage}
                            />
                     
                        </Form.Group>
                    
                     
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
