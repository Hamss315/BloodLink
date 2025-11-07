import { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
  Modal
} from 'react-bootstrap'
import {
  FaUser,
  FaBirthdayCake,
  FaHeartbeat,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit
} from 'react-icons/fa'
import { useAppSelector } from '../../../app/hooks'
import EditProfile from './EditProfileForm' 
import styles from './ProfilePage.module.css'

function Profile() {
  const { user } = useAppSelector((state) => state.user)
  const [showModal, setShowModal] = useState(false)

  if (!user) {
    return (
      <Container className="text-center mt-5">
        <h4>No user data found. Please log in.</h4>
      </Container>
    )
  }

  return (
    <div className={styles.bg}>
      <Container className="mt-5 py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <img
                    src="src/assets/images/user.gif"
                    alt="User"
                    style={{ width: '80px', height: '80px', marginBottom: '15px' }}
                  />
                  <h2 className="fw-bold mb-2" style={{ color: '#c0392b' }}>
                    My Profile
                  </h2>
                  <p className="text-muted">View or update your account details</p>
                </div>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FaUser /></InputGroup.Text>
                      <Form.Control type="text" value={user.name} disabled />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FaPhone /></InputGroup.Text>
                      <Form.Control type="text" value={user.phone} disabled />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FaBirthdayCake /></InputGroup.Text>
                      <Form.Control type="number" value={user.age} disabled />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Blood Type</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FaHeartbeat /></InputGroup.Text>
                      <Form.Control type="text" value={user.bloodType} disabled />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Governorate</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FaMapMarkerAlt /></InputGroup.Text>
                      <Form.Control type="text" value={user.governorate} disabled />
                    </InputGroup>
                  </Form.Group>

                  <Button
                    variant="outline-danger"
                    className="w-100"
                    size="lg"
                    onClick={() => setShowModal(true)}
                  >
                    <FaEdit className="me-2" /> Edit Profile
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditProfile closeModal={() => setShowModal(false)} />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  )
}

export default Profile
