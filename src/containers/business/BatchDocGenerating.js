import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import BatchDocGenerateForm from '../../components/forms/BatchDocGenerateForm'
import {CTX_HOST} from '../../config'
//import { login } from '../actions/user'
//import BatchDocGeneratingForm from '../components/business/BatchDocGeneratingForm';


class BatchDocGenerating extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleFormSubmit = (values) => {
      console.log('BatchDocGenerating  handleFormSubmit:', values)
      //this.sendForm(values)
      // this.getBigFile()
      this.chunk2(values)
  }


  chunk2 = (values) => {
      const url = CTX_HOST+'/lawsuit/batch-documents'
      const form = new FormData();
      form.append('filenameKey', values.filenameColumn);
      form.append('template', values.template[0]);
      form.append('csv', values.csv[0]);
      var request = new Request(url, {
        credentials: 'include',
        method: 'post',
        mode: 'cors',
        body: form
      });
      fetch(request)
        .then(processChunkedResponse)
        .then(onChunkedResponseComplete)
        .catch(onChunkedResponseError)

      function onChunkedResponseComplete(result) {
        console.log('all done!', result)
      }

      function onChunkedResponseError(err) {
        console.error(err)
      }

      function processChunkedResponse(response) {
        var text = '';
        var reader = response.body.getReader()
        var decoder = new TextDecoder();

        return readChunk();

        function readChunk() {
          console.log('read chunk')
          return reader.read().then(appendChunks);
        }

        function appendChunks(result) {
          var chunk = decoder.decode(result.value || new Uint8Array, {stream: !result.done});
          console.log('got chunk of', chunk.length, 'bytes')
          text += chunk;
          console.log('got chunk', chunk)
          console.log('text so far is', text.length, 'bytes\n');
          if (result.done) {
            console.log('returning')
            return text;
          } else {
            console.log('recursing')
            return readChunk();
          }
        }
      }

  }

  // sendForm = (values) => {
  //     const url = CTX_HOST+'/lawsuit/batch-documents'
  //     const form = new FormData();
  //     form.append('filenameKey', values.filenameColumn);
  //     form.append('template', values.template[0]);
  //     form.append('csv', values.csv[0]);
  //     var request = new Request(url, {
  //       credentials: 'include',
  //       method: 'post',
  //       mode: 'cors',
  //       body: form
  //     });
  //     fetch(request).then(res => {
  //       console.log(res)
  //     })
  // }


  render() {
    //const {  } = this.props
    return (
      <div>
        <h2>Batch Document Generating</h2>
        <BatchDocGenerateForm onSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(BatchDocGenerating)
