import { useToast , Wrap,WrapItem, Button} from '@chakra-ui/react';
function PositionExample(props) {
    const toast = useToast()
    const positions = [
      'top',

    ]
  
    return (
      <Wrap >
        {positions.map((position, i) => (
          <WrapItem key={i} >
            <Button colorScheme={'green'}
              onClick={() =>{props.value();
                if(props.value()==true){
                    toast({
                        title: `Please Enter Both Player Name`,
                        position: position,
                        isClosable: true,
                      })
                }}
              }
            >
              Let's Begin
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    )
  }
  export default PositionExample;