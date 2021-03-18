<nav class="navbar navbar-expand fixed-top">
    <div class="navbar-brand d-none d-lg-block">
        <a href="index.html"><img src="" alt="Klorofil Pro Logo" class="img-fluid logo" width="50"></a>
    </div>
    <div class="container-fluid p-0">
        <button id="tour-fullwidth" type="button" class="btn btn-default btn-toggle-fullwidth"><i class="ti-menu"></i></button>
        <form class="form-inline search-form mr-auto d-none d-sm-block">
            <div class="input-group">
                <input type="text" value="" class="form-control" placeholder="Search dashboard...">
                <div class="input-group-append">
                    <button type="button" class="btn"><i class="fa fa-search"></i></button>
                </div>
            </div>
        </form>
        <div id="navbar-menu">
            <ul class="nav navbar-nav align-items-center">
                <li class="nav-item">
                    <a href="#" class="dropdown-toggle btn-toggle-rightsidebar">
                        <i class="ti-layout-sidebar-right"></i>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                        <i class="ti-bell"></i>
                        <span class="badge bg-danger">5</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right notifications">
                        <li class="dropdown-item">You have 5 new notifications</li>
                        <li class="dropdown-item">
                            <a href="#" class="notification-item">
                                <i class="fa fa-hdd-o custom-bg-red"></i>
                                <p><span class="text">System space is almost full</span> <span class="timestamp">11 minutes ago</span></p>
                            </a>
                        </li>
                        <li class="dropdown-item">
                            <a href="#" class="notification-item">
                                <i class="fa fa-tasks custom-bg-yellow"></i>
                                <p><span class="text">You have 9 unfinished tasks</span> <span class="timestamp">20 minutes ago</span></p>
                            </a>
                        </li>
                        <li class="dropdown-item">
                            <a href="#" class="notification-item">
                                <i class="fa fa-book custom-bg-green2"></i>
                                <p><span class="text">Monthly report is available</span> <span class="timestamp">1 hour ago</span></p>
                            </a>
                        </li>
                        <li class="dropdown-item">
                            <a href="#" class="notification-item">
                                <i class="fa fa-bullhorn custom-bg-purple"></i>
                                <p><span class="text">Weekly meeting in 1 hour</span> <span class="timestamp">2 hours ago</span></p>
                            </a>
                        </li>
                        <li class="dropdown-item">
                            <a href="#" class="notification-item">
                                <i class="fa fa-check custom-bg-green"></i>
                                <p><span class="text">Your request has been approved</span> <span class="timestamp">3 days ago</span></p>
                            </a>
                        </li>
                        <li class="dropdown-item"><a href="#" class="more">See all notifications</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" id="tour-help" class="dropdown-toggle" data-toggle="dropdown"><i class="ti-help"></i> <span class="sr-only">Help</span></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#"><i class="ti-direction"></i> Basic Use</a></li>
                        <li><a href="#"><i class="ti-server"></i> Working With Data</a></li>
                        <li><a href="#"><i class="ti-lock"></i> Security</a></li>
                        <li><a href="#"><i class="ti-light-bulb"></i> Troubleshooting</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="<?=base_url()?>assets/img/user.jpg" class="user-picture" alt=" Avatar"> <span>Samuel</span></a>
                    <ul class="dropdown-menu dropdown-menu-right logged-user-menu">
                        <li><a href="#"><i class="ti-user"></i> <span>My Profile</span></a></li>
                        <li><a href="appviews-inbox.html"><i class="ti-email"></i> <span>Message</span></a></li>
                        <li><a href="#"><i class="ti-settings"></i> <span>Settings</span></a></li>
                        <li><a href="page-lockscreen.html"><i class="ti-power-off"></i> <span>Logout</span></a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div id="applicacion">
