#
# CDDL HEADER START
#
# The contents of this file are subject to the terms of the
# Common Development and Distribution License (the "License").
# You may not use this file except in compliance with the License.
#
# You can obtain a copy of the license at usr/src/OPENSOLARIS.LICENSE
# or http://www.opensolaris.org/os/licensing.
# See the License for the specific language governing permissions
# and limitations under the License.
#
# When distributing Covered Code, include this CDDL HEADER in each
# file and include the License file at usr/src/OPENSOLARIS.LICENSE.
# If applicable, add the following below this CDDL HEADER, with the
# fields enclosed by brackets "[]" replaced with your own identifying
# information: Portions Copyright [yyyy] [name of copyright owner]
#
# CDDL HEADER END
#

#
# Copyright (c) 2017, cgrzemba@opencsw.org
#

PATH=$(SPRO_VROOT)/bin:$(GNUBIN):$(USRBINDIR)

COMPONENT_NAME=		389-admin
COMPONENT_VERSION=	1.1.46
COMPONENT_PROJECT_URL=	http://directory.fedoraproject.org
COMPONENT_ARCHIVE_HASH= \
    sha256:6e1da6f8494bc6693cb50f77db448e3c3aa7cd96470f92ef95ed4b784e7b58fe
COMPONENT_ARCHIVE = $(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.bz2
COMPONENT_ARCHIVE_URL=	http://directory.fedoraproject.org/binaries/$(COMPONENT_ARCHIVE)
COMPONENT_BUGDB=	
COMPONENT_ANITYA_ID=	

TPNO=			9999

BUILD_BITS= 64
include ../../../make-rules/shared-macros.mk

include $(WS_MAKE_RULES)/common.mk

# studio_C99MODE= $(studio_C99_ENABLE)
# CPPFLAGS += "-DFALSE_SHARING_ALIGN=64"
# there should run apu-1-config also
CPPFLAGS += "-I/usr/apr-util/1.5/include"
LDFLAGS += -lsocket -lnsl

# uses  __atomic_add_fetch_8
COMPILER = gcc

CONFIGURE_OPTIONS += --sysconfdir=/etc
CONFIGURE_OPTIONS += --localstatedir=/var
CONFIGURE_OPTIONS += --with-openldap-inc=$(USRINCDIR)/openldap
CONFIGURE_OPTIONS += --with-openldap-lib=$(USRLIBDIR)/$(MACH64)
CONFIGURE_OPTIONS += --with-sasl-inc=$(USRINCDIR)/sasl2 
CONFIGURE_OPTIONS += --with-sasl-lib=$(USRLIBDIR)/sasl2
CONFIGURE_OPTIONS += --with-nss-lib=$(USRLIBDIR)/mps/$(MACH64)
CONFIGURE_OPTIONS += --with-nss-inc=$(USRINCDIR)/mps
CONFIGURE_OPTIONS += --with-nspr-lib=$(USRLIBDIR)/mps/$(MACH64)
CONFIGURE_OPTIONS += --with-nspr-inc=$(USRINCDIR)/mps
CONFIGURE_OPTIONS += --with-apxs=/usr/apache2/2.4/bin/apxs
CONFIGURE_OPTIONS += --with-httpd=/usr/apache2/2.4/bin/httpd
CONFIGURE_OPTIONS += --with-modnss-lib=/usr/apache2/2.4/libexec
CONFIGURE_OPTIONS += --with-modnss-bin=/usr/apache2/2.4/bin

COMPONENT_PRE_CONFIGURE_ACTION = \
	($(CLONEY) $(SOURCE_DIR) $(@D))

COMPONENT_PREP_ACTION = (cd $(@D) ; \
	aclocal --force; libtoolize --copy --force; \
	autoconf -f; \
	automake --add-missing --copy --force-missing)

COMPONENT_POST_INSTALL_ACTION = \
	( ginstall -d $(PROTOSVCMANIFESTDIR)/network ; \
         svcbundle -o $(PROTOSVCMANIFESTDIR)/network/ds-admin.xml -s service-name=network/ds-admin -s start-method=/usr/bin/start-ds-admin -s stop-method=/usr/bin/stop-ds-admin -s model=daemon -s enabled=false )


REQUIRED_PACKAGES += library/icu
REQUIRED_PACKAGES += library/security/nss
REQUIRED_PACKAGES += library/nspr
REQUIRED_PACKAGES += library/openldap
REQUIRED_PACKAGES += web/server/apache-24/module/mod_nss
REQUIRED_PACKAGES += service/389-ds/389-adminutil
REQUIRED_PACKAGES += system/core-os
REQUIRED_PACKAGES += library/perl-5/perldap
REQUIRED_PACKAGES += library/perl-5/netaddr-ip
REQUIRED_PACKAGES += library/apr-util-15
REQUIRED_PACKAGES += web/server/apache-24
REQUIRED_PACKAGES += $(PERL_PKG)
REQUIRED_PACKAGES += library/perl-5/netaddr-ip

